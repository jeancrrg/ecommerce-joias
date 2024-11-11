import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ConfiguracaoAuxiliarService } from "src/app/core/service/configuracao.auxiliar.service";
import { RequisicaoHttpService } from "src/app/core/service/requisicaoHttp.service";
import { ValidationUtils } from "src/app/core/utils/ValidationUtils.util";
import { ProdutoDTO } from "../models/dto/ProdutoDTO.model";

@Injectable({
    providedIn: 'root',
})
export class ProdutoService {

    constructor(
        private requisicaoHttpService: RequisicaoHttpService,
        private configuracaoAuxiliarService: ConfiguracaoAuxiliarService
    ) { }

    buscar(codigo: number, nome: string, loader: boolean): Observable<ProdutoDTO[]> {
        let parametros = new HttpParams();
        if (ValidationUtils.isNotEmpty(codigo)) {
            parametros = parametros.append('codigo', codigo + '');
        }
        if (ValidationUtils.isNotEmpty(nome)) {
            parametros = parametros.append('nome', nome);
        }
        return this.requisicaoHttpService.Get<ProdutoDTO[]>(this.configuracaoAuxiliarService.getContextoSistema() + 'produtos', {params: parametros}, loader, false, false);
    }

}
