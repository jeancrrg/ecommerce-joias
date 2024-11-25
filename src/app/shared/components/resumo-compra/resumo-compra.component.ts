import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProdutoCarrinhoDTO } from '../../models/dto/ProdutoCarrinhoDTO.model';
import { ValidationUtils } from 'src/app/core/utils/ValidationUtils.util';
import { ProdutoCarrinhoService } from '../../services/produtoCarrinho.service';
import { catchError, of, tap } from 'rxjs';
import { NotificacaoService } from 'src/app/core/service/notificacao.service';

@Component({
    selector: 'resumo-compra',
    templateUrl: './resumo-compra.component.html',
    styleUrl: './resumo-compra.component.scss',
})
export class ResumoCompraComponent implements OnInit {

    valorFrete: number = 0;
    valorTotalCarrinho: number = 0;
    codigoCliente: number = 1;
    listaProdutosCarrinhoDTO: ProdutoCarrinhoDTO[] = [];

    @Input() labelBotaoPrimario: string = 'FINALIZAR PEDIDO';
    @Input() labelBotaoSecundario: string = 'CONTINUAR COMPRANDO';

    @Output() onFinalizarCompra = new EventEmitter<void>();
    @Output() onContinuarComprando = new EventEmitter<void>();

    constructor(
        private notificacaoService: NotificacaoService,
        private produtoCarrinhoService: ProdutoCarrinhoService
    ) {}

    async ngOnInit(): Promise<void> {
        await this.buscarProdutosCarrinho(this.codigoCliente);
        this.atualizarResumoCompra(this.listaProdutosCarrinhoDTO);
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

    finalizarCompra(): void {
        this.onFinalizarCompra.emit();
    }

    continuarComprando(): void {
        this.onContinuarComprando.emit();
    }

    atualizarResumoCompra(listaProdutos: ProdutoCarrinhoDTO[]): void {
        if (ValidationUtils.isNotEmpty(listaProdutos) && listaProdutos.length > 0) {
            this.valorTotalCarrinho = this.calcularTotalCarrinho(listaProdutos);
        } else {
            this.valorTotalCarrinho = 0;
        }
    }

    calcularTotalCarrinho(listaProdutos: ProdutoCarrinhoDTO[]): number {
        return listaProdutos.reduce((total, produto) => {
            return total + (produto.preco * produto.quantidadeProduto);
        }, 0);
    }

}
