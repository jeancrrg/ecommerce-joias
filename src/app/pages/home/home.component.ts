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

    async adicionarAoCarrinho(produtoDTO: ProdutoDTO): Promise<void> {
        const quantidadeEstoque: number = await this.buscarQuantidadeEstoque(produtoDTO.codigo);
        if (produtoDTO.quantidadeEstoque < quantidadeEstoque) {
            this.notificacaoService.aviso('Produto sem estoque!', 'AVISO', false, 10);
        }
        if (!this.produtoJaEstaNoCarrinho(produtoDTO.codigo)) {
            this.listaCodigoProdutosCarrinho.push(produtoDTO.codigo);
        }
        const quantidadeParaAdicionar: number = 1;
        this.adicionar(produtoDTO.codigo, quantidadeParaAdicionar, this.codigoCliente);
    }

    async buscarQuantidadeEstoque(codigoProduto: number): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            this.produtoService.buscarQuantidadeEstoque(codigoProduto, true).pipe(
                tap((response) => {
                    resolve(response);
                }),
                catchError((error) => {
                    this.notificacaoService.erro(error.error, undefined, false, 10);
                    reject(error);
                    return of();
                })
            ).subscribe({
                next: (response) => resolve(response),
                error: (erro) => reject(erro)
            });
        });
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
