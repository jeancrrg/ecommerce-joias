import { Component, OnInit } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { NotificacaoService } from 'src/app/core/service/notificacao.service';
import { listaBarnersProdutos } from 'src/app/shared/data/listaBarnersProdutos';
import { ProdutoDTO } from 'src/app/shared/models/dto/ProdutoDTO.model';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { ProdutoCarrinhoService } from 'src/app/shared/services/produtoCarrinho.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

    listaNomesBarners: string[] = [];
    listaProdutosDTO: ProdutoDTO[] = [];
    listaCodigoProdutosCarrinho: number[] = [];
    codigoCliente: number = 1;

    constructor(
        private notificacaoService: NotificacaoService,
        private produtoService: ProdutoService,
        private produtoCarrinhoService: ProdutoCarrinhoService
    ) {}

    async ngOnInit(): Promise<void> {
        this.listaNomesBarners = listaBarnersProdutos;
        this.buscarProdutos(undefined, undefined);
        this.buscarCodigoProdutosCarrinho(this.codigoCliente);
    }

    buscarProdutos(codigo: number, nome: string): void {
        this.listaProdutosDTO = [];
        this.produtoService.buscar(codigo, nome, true).pipe(
            tap((response) => {
                this.listaProdutosDTO = [...response];
            }),
            catchError((error) => {
                this.notificacaoService.erro(error.error, undefined, false, 10);
                return of();
            })
        ).subscribe();
    }

    buscarCodigoProdutosCarrinho(codigoCliente: number): void {
        this.produtoCarrinhoService.buscarCodigoProdutos(codigoCliente, true).pipe(
            tap((response) => {
                this.listaCodigoProdutosCarrinho = [...response];
            }),
            catchError((error) => {
                this.notificacaoService.erro(error.error, undefined, false, 10);
                return of();
            })
        ).subscribe();
    }

    receberProdutosPesquisados(listaProdutos: ProdutoDTO[]): void {
        this.listaProdutosDTO = listaProdutos;
    }

    adicionarAoCarrinho(produtoDTO: ProdutoDTO): void {
        if (!this.produtoJaEstaNoCarrinho(produtoDTO.codigo)) {
            this.listaCodigoProdutosCarrinho.push(produtoDTO.codigo);
        }
        const quantidadeParaAdicionar: number = 1;
        this.adicionar(produtoDTO.codigo, quantidadeParaAdicionar, this.codigoCliente);
    }

    produtoJaEstaNoCarrinho(codigoProduto: number): boolean {
        return this.listaCodigoProdutosCarrinho.includes(codigoProduto);
    }

    adicionar(codigoProduto: number, quantidade: number, codigoCliente: number): void {
        this.produtoCarrinhoService.adicionar(codigoProduto, quantidade, codigoCliente, true).pipe(
            tap((response) => {
                this.notificacaoService.sucesso('Produto adicionado ao carrinho com sucesso!', 'SUCESSO', false, undefined);
            }),
            catchError((error) => {
                this.notificacaoService.erro(error.error, undefined, false, 10);
                return of();
            })
        ).subscribe();
    }

}
