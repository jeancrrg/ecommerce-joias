import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificacaoService } from 'src/app/core/service/notificacao.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {

    formularioAtual: string = 'login';
    movimentacaoBotao: string = 'translateX(0)';
    movimentacaoFormulario: string = 'translateX(210px)';

    emailLogin: string;
    senhaLogin: string;

    nome: string;
    telefone: string;
    cpf: string;
    email: string;
    senha: string;

    // Nova forma de injeção de dependencia
    private formBuilder: FormBuilder = inject(FormBuilder);
    private notificacacaoService: NotificacaoService = inject(NotificacaoService);

    protected formulario = this.formBuilder.group({
        nome: [null, Validators.required],
        telefone: [null, Validators.required],
        cpf: [null, Validators.required],
        email: [null, Validators.required],
        senha: [null, [Validators.required,
                        Validators.minLength(8),
                        Validators.maxLength(15),
                        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')]
        ]
    });

    ngOnInit(): void {

    }

    mudarFormulario(descricaoFormulario: string): void {
        this.formularioAtual = descricaoFormulario;
        this.movimentacaoBotao = descricaoFormulario === 'login' ? 'translateX(0)' : 'translateX(108px)';
        this.movimentacaoFormulario = descricaoFormulario === 'login' ? 'translateX(210px)' : 'translateX(-210px)';
    }

    acessarConta(): void {
        console.log('form entrar: ', this.formulario);
    }

    cadastrar(): void {
        if (this.formulario.invalid) {
            this.notificacacaoService.aviso('Preencha todos os campos para se cadastrar!', 'AVISO', false, 10);
        }
    }

}
