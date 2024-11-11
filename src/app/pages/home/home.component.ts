import { Component, OnInit } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { NotificacaoService } from 'src/app/core/service/notificacao.service';
import { listaBarnersProdutos } from 'src/app/shared/data/listaBarnersProdutos';
import { ProdutoDTO } from 'src/app/shared/models/dto/ProdutoDTO.model';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { ProdutoCarrinhoService } from 'src/app/shared/services/produtoCarrinho.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

    listaNomesBarners: string[] = [];
    listaProdutos: ProdutoDTO[] = [];

    constructor(
        private notificacaoService: NotificacaoService,
        private produtoService: ProdutoService,
        private produtoCarrinhoService: ProdutoCarrinhoService
    ) {}

    ngOnInit(): void {
        this.listaNomesBarners = listaBarnersProdutos;
        this.buscarProdutos(undefined, undefined);
    }

    buscarProdutos(codigo: number, nome: string): void {
        this.listaProdutos = [];
        this.produtoService.buscar(codigo, nome, true).pipe(
            tap((response) => {
                this.listaProdutos = [...response];
            }),
            catchError((error) => {
                this.notificacaoService.erro(error.error, undefined, false, 10);
                return of();
            })
        ).subscribe();
    }

    adicionarAoCarrinho(produtoDTO: ProdutoDTO): void {
        this.produtoCarrinhoService.adicionarProduto(produtoDTO.codigo, 1, 1, true).pipe(
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
