import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {

    formularioAtual: string = 'login';
    movimentacaoBotao: string = 'translateX(0)';
    movimentacaoFormulario: string = 'translateX(220px)';

    emailLogin: string;
    senhaLogin: string;

    nomeCadastro: string;
    telefoneCadastro: string;
    cpfCadastro: string;
    emailCadastro: string;
    senhaCadastro: string;

    constructor() {}

    ngOnInit(): void {

    }

    mudarFormulario(descricaoFormulario: string): void {
        this.formularioAtual = descricaoFormulario;
        this.movimentacaoBotao = descricaoFormulario === 'login' ? 'translateX(0)' : 'translateX(108px)';
        this.movimentacaoFormulario = descricaoFormulario === 'login' ? 'translateX(220px)' : 'translateX(-180px)';
    }

}
