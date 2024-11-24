import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { catchError, of, tap } from 'rxjs';
import { NotificacaoService } from 'src/app/core/service/notificacao.service';
import { ValidationUtils } from 'src/app/core/utils/ValidationUtils.util';
import { ResumoCompraComponent } from 'src/app/shared/components/resumo-compra/resumo-compra.component';
import { ProdutoCarrinhoDTO } from 'src/app/shared/models/dto/ProdutoCarrinhoDTO.model';
import { ProdutoCarrinhoService } from 'src/app/shared/services/produtoCarrinho.service';

@Component({
    selector: 'carrinho',
    templateUrl: './carrinho.component.html',
    styleUrl: './carrinho.component.scss',
})
export class CarrinhoComponent implements OnInit, OnDestroy {

    itemsBreadCrumb: MenuItem[] = [];
    listaProdutosCarrinhoDTO: ProdutoCarrinhoDTO[] = [];
    valorFrete: number = 0;
    valorTotalCarrinho: number = 0;
    codigoCliente: number = 1;

    @ViewChild(ResumoCompraComponent) componenteResumoCompra!: ResumoCompraComponent;

    constructor(
        private router: Router,
        private notificacaoService: NotificacaoService,
        private produtoCarrinhoService: ProdutoCarrinhoService
    ) { }

    async ngOnInit(): Promise<void> {
        this.carregarItensCaminhoCarrinho();
        await this.buscarProdutosCarrinho(this.codigoCliente);
    }

    ngOnDestroy(): void {
        this.atualizarCarrinho(this.codigoCliente, this.listaProdutosCarrinhoDTO);
    }

    carregarItensCaminhoCarrinho(): void {
        this.itemsBreadCrumb.push({ icon: 'pi pi-shopping-cart', label: 'Carrinho'});
        this.itemsBreadCrumb.push({ icon: 'pi pi-check-square', label: 'Confirmação' });
    }

    async buscarProdutosCarrinho(codigoCliente: number): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.produtoCarrinhoService.buscar(codigoCliente, true).pipe(
                tap((response) => {
                    this.listaProdutosCarrinhoDTO = [...response];
                }),
                catchError((error) => {
                    this.notificacaoService.erro(error.error, undefined, false, 10);
                    reject(error);
                    return of();
                })
            ).subscribe({
                next: () => resolve(),
                error: (erro) => reject(erro)
            });
        });
    }

    adicionarQuantidadeProduto(produtoCarrinhoDTO: ProdutoCarrinhoDTO): void {
        produtoCarrinhoDTO.quantidadeProduto ++;
        produtoCarrinhoDTO.valorSubtotalProduto = produtoCarrinhoDTO.preco * produtoCarrinhoDTO.quantidadeProduto;
        this.componenteResumoCompra.atualizarResumoCompra();
    }

    removerQuantidadeProduto(produtoCarrinhoDTO: ProdutoCarrinhoDTO): void {
        if (produtoCarrinhoDTO.quantidadeProduto > 1) {
            produtoCarrinhoDTO.quantidadeProduto --;
            produtoCarrinhoDTO.valorSubtotalProduto = produtoCarrinhoDTO.preco * produtoCarrinhoDTO.quantidadeProduto;
            this.componenteResumoCompra.atualizarResumoCompra();
        }
    }

    async removerProdutoCarrinho(produtoCarrinhoDTO: ProdutoCarrinhoDTO): Promise<void> {
        await this.removerProduto(produtoCarrinhoDTO.codigo, produtoCarrinhoDTO.codigoCliente);
        this.componenteResumoCompra.atualizarResumoCompra();
    }

    async removerProduto(codigoProduto: number, codigoCliente: number): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.produtoCarrinhoService.remover(codigoProduto, codigoCliente, true).pipe(
                tap((response) => {
                    this.listaProdutosCarrinhoDTO = this.listaProdutosCarrinhoDTO.filter(produto => produto.codigo != codigoProduto);
                    this.notificacaoService.sucesso('Produto removido do carrinho com sucesso!', 'SUCESSO', false, 10);
                }),
                catchError((error) => {
                    this.notificacaoService.erro(error.error, undefined, false, 10);
                    reject(error);
                    return of();
                })
            ).subscribe({
                next: () => resolve(),
                error: (erro) => reject(erro)
            });
        });
    }

    finalizarCompra(): void {
        if (ValidationUtils.isEmpty(this.listaProdutosCarrinhoDTO) || this.listaProdutosCarrinhoDTO.length == 0) {
            this.notificacaoService.aviso('Não é possível finalizar a compra pois seu carrinho está vazio! Adicione produtos ao carrinho.', 'AVISO', false, 10);
        } else {
            localStorage.setItem("quantidade-produtos-carrinho", JSON.stringify(this.listaProdutosCarrinhoDTO.length));
            this.router.navigateByUrl('confirmacao-dados');
        }
    }

    voltarParaPaginaInicial(): void {
        this.router.navigateByUrl('');
    }

    atualizarCarrinho(codigoCliente: number, listaProdutosCarrinhoDTO: ProdutoCarrinhoDTO[]): void {
        this.produtoCarrinhoService.atualizar(codigoCliente, listaProdutosCarrinhoDTO, true).pipe(
            tap((response) => {
            }),
            catchError((error) => {
                this.notificacaoService.erro(error.error, undefined, false, 10);
                return of();
            })
        ).subscribe();
    }

}
