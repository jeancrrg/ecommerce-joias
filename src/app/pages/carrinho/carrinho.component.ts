import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { catchError, of, tap } from 'rxjs';
import { NotificacaoService } from 'src/app/core/service/notificacao.service';
import { ProdutoCarrinhoDTO } from 'src/app/shared/models/dto/ProdutoCarrinhoDTO.model';
import { ProdutoCarrinhoService } from 'src/app/shared/services/produtoCarrinho.service';

@Component({
    selector: 'app-carrinho',
    templateUrl: './carrinho.component.html',
    styleUrl: './carrinho.component.scss',
})
export class CarrinhoComponent implements OnInit {

    itemsBreadCrumb: MenuItem[] = [];
    listaProdutosCarrinhoDTO: ProdutoCarrinhoDTO[] = [];
    valorTotalCarrinho: number = 21546546;

    constructor(
        private notificacaoService: NotificacaoService,
        private produtoCarrinhoService: ProdutoCarrinhoService
    ) { }

    ngOnInit(): void {
        this.carregarItensCaminhoCarrinho();
        const codigoCliente: number = 1;
        this.buscarProdutosCarrinho(codigoCliente);
    }

    carregarItensCaminhoCarrinho(): void {
        this.itemsBreadCrumb.push({ icon: 'pi pi-shopping-cart', label: 'Carrinho'});
        this.itemsBreadCrumb.push({ icon: 'pi pi-user', label: 'Identificação'});
        this.itemsBreadCrumb.push({ icon: 'pi pi-check-square', label: 'Confirmação' });
    }

    buscarProdutosCarrinho(codigoCliente: number): void {
        this.produtoCarrinhoService.buscar(codigoCliente, true).pipe(
            tap((response) => {
                this.listaProdutosCarrinhoDTO = [...response];
            }),
            catchError((error) => {
                this.notificacaoService.erro(error.error, undefined, false, 10);
                return of();
            })
        ).subscribe();
    }

    adicionarQuantidadeProduto(produtoCarrinhoDTO: ProdutoCarrinhoDTO): void {
        produtoCarrinhoDTO.quantidadeProduto ++;
    }

    removerQuantidadeProduto(produtoCarrinhoDTO: ProdutoCarrinhoDTO): void {
        if (produtoCarrinhoDTO.quantidadeProduto > 0) {
            produtoCarrinhoDTO.quantidadeProduto --;
        }
    }

    finalizarCompra(): void {

    }

    voltarParaPaginaInicial(): void {

    }

}
