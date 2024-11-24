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
    quantidadeProdutosCarrinho: number;

    codigoCliente: number = 1;

    constructor(
        private notificacaoService: NotificacaoService,
        private produtoService: ProdutoService,
        private produtoCarrinhoService: ProdutoCarrinhoService
    ) {}

    ngOnInit(): void {
        this.listaNomesBarners = listaBarnersProdutos;
        this.buscarProdutos(undefined, undefined);
        this.atualizarQuantidadeProdutosCarrinho();
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

    receberProdutos(lista: ProdutoDTO[]): void {
        this.listaProdutosDTO = lista;
    }

    atualizarQuantidadeProdutosCarrinho(): void {
        this.produtoCarrinhoService.buscarQuantidadeProdutosCarrinho(this.codigoCliente, true).pipe(
            tap((response) => {
                this.quantidadeProdutosCarrinho = response;
            }),
            catchError((error) => {
                this.notificacaoService.erro(error.error, undefined, false, 10);
                return of();
            })
        ).subscribe();
    }

    adicionarAoCarrinho(produtoDTO: ProdutoDTO): void {
        const quantidadeParaAdicionar: number = 1;
        this.produtoCarrinhoService.adicionar(produtoDTO.codigo, quantidadeParaAdicionar, this.codigoCliente, true).pipe(
            tap((response) => {
                this.quantidadeProdutosCarrinho ++;
                this.notificacaoService.sucesso('Produto adicionado ao carrinho com sucesso!', 'SUCESSO', false, undefined);
            }),
            catchError((error) => {
                this.notificacaoService.erro(error.error, undefined, false, 10);
                return of();
            })
        ).subscribe();
    }

}
