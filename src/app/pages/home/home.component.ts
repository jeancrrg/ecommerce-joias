import { Component, OnInit } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { NotificacaoService } from 'src/app/core/service/notificacao.service';
import { listaBarnersProdutos } from 'src/app/shared/data/listaBarnersProdutos';
import { ProdutoCarrinhoDTO } from 'src/app/shared/models/dto/ProdutoCarrinhoDTO.model';
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
    quantidadeProdutos: number = 0;
    listaProdutosCarrinhoDTO: ProdutoCarrinhoDTO[] = [];
    codigoCliente: number = 1;

    constructor(
        private notificacaoService: NotificacaoService,
        private produtoService: ProdutoService,
        private produtoCarrinhoService: ProdutoCarrinhoService
    ) {}

    async ngOnInit(): Promise<void> {
        this.listaNomesBarners = listaBarnersProdutos;
        this.buscarProdutos(undefined, undefined);
        await this.buscarProdutosCarrinho(this.codigoCliente);
        this.quantidadeProdutos = this.listaProdutosCarrinhoDTO.length;
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

    async buscarProdutosCarrinho(codigoCliente: number): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.produtoCarrinhoService.buscar(codigoCliente, true).pipe(
                tap((response) => {
                    this.listaProdutosCarrinhoDTO = [...response];
                }),
                catchError((error) => {
                    this.notificacaoService.erro(error.error, undefined, false, 10);
                    return of();
                })
            ).subscribe({
                next: () => resolve(),
                error: (erro) => reject(erro)
            });
        });
    }

    receberProdutosPesquisados(listaProdutos: ProdutoDTO[]): void {
        this.listaProdutosDTO = listaProdutos;
    }

    adicionarAoCarrinho(produtoDTO: ProdutoDTO): void {
        const quantidadeParaAdicionar: number = 1;
        this.adicionar(produtoDTO.codigo, quantidadeParaAdicionar, this.codigoCliente);
        this.quantidadeProdutos++;
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
