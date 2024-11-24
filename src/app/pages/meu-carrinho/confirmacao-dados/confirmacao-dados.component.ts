import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ValidationUtils } from 'src/app/core/utils/ValidationUtils.util';

@Component({
    selector: 'confirmacao-dados',
    templateUrl: './confirmacao-dados.component.html',
    styleUrl: './confirmacao-dados.component.scss',
})
export class ConfirmacaoDadosComponent implements OnInit {

    readonly KEY_QUANTIDADE_CARRINHO: string = 'quantidade-produtos-carrinho';

    itemsBreadCrumb: MenuItem[] = [];
    quantidadeProdutosCarrinho: number;

    nomeCliente: string = 'Jean Carlo Rabelo Garcia';
    cpfCliente: string = '70324027630';
    emailCliente: string = 'Jeancrg3232@gmail.com';
    telefoneCliente: string = '9919683270';

    ruaCliente: string = 'Rua Natal';
    numeroEnderecoCliente: string = '1133';
    cidadeCliente: string = 'Uberlândia';
    estadoCliente: string = 'MG';
    cepCliente: string = '38400755';

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
        this.carregarItensCaminhoCarrinho();
        this.obterQuantidadeProdutosCarrinhoLocalStorage()
    }

    carregarItensCaminhoCarrinho(): void {
        this.itemsBreadCrumb.push({ icon: 'pi pi-shopping-cart', label: 'Carrinho'});
        this.itemsBreadCrumb.push({ icon: 'pi pi-check-square', label: 'Confirmação' });
    }

    obterQuantidadeProdutosCarrinhoLocalStorage() : void {
        const quantidadeCarrinho : string = localStorage.getItem(this.KEY_QUANTIDADE_CARRINHO);
        if (ValidationUtils.isNotEmpty(quantidadeCarrinho)) {
            this.quantidadeProdutosCarrinho = JSON.parse(localStorage.getItem(this.KEY_QUANTIDADE_CARRINHO));
        }
    }

    finalizarCompra(): void {

    }

    voltarParaPaginaInicial(): void {
        this.router.navigateByUrl('');
    }

}
