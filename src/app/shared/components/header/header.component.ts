import { catchError, of, tap } from 'rxjs';
import { ProdutoService } from './../../services/produto.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotificacaoService } from 'src/app/core/service/notificacao.service';
import { ProdutoDTO } from '../../models/dto/ProdutoDTO.model';
import { ValidationUtils } from 'src/app/core/utils/ValidationUtils.util';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {

    filtroNomeProduto: string;
    listaProdutosDTO: ProdutoDTO[] = [];
    estaPesquisando: boolean = false;

    @Input() mostrarBarraPesquisa: boolean = true;
    @Input() quantidadeItensCarrinho: number;
    @Output() produtosPesquisados = new EventEmitter<ProdutoDTO[]>();

    constructor(
        private notificacaoService: NotificacaoService,
        private produtoService: ProdutoService
    ) {}

    ngOnInit(): void {}

    pesquisar(): void {
        this.produtoService.buscar(undefined, this.filtroNomeProduto, true).pipe(
            tap((response) => {
                this.listaProdutosDTO = [...response];
                this.produtosPesquisados.emit(this.listaProdutosDTO);
                if (ValidationUtils.isEmpty(this.listaProdutosDTO) || this.listaProdutosDTO.length == 0) {
                    this.notificacaoService.informacao('Nenhum produto encontrado!', 'INFORMAÇÃO', false, 10);
                } else {
                    this.listaProdutosDTO = this.listaProdutosDTO.slice(0, 6);
                }
            }),
            catchError((error) => {
                this.notificacaoService.erro(error.error, undefined, false, 10);
                return of([]);
            })
        ).subscribe();
    }

}
