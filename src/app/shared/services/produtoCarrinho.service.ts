import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ConfiguracaoAuxiliarService } from "src/app/core/service/configuracao.auxiliar.service";
import { RequisicaoHttpService } from "src/app/core/service/requisicaoHttp.service";
import { ValidationUtils } from "src/app/core/utils/ValidationUtils.util";
import { ProdutoCarrinhoDTO } from "../models/dto/ProdutoCarrinhoDTO.model";

@Injectable({
    providedIn: 'root',
})
export class ProdutoCarrinhoService {

    constructor(
        private requisicaoHttpService: RequisicaoHttpService,
        private configuracaoAuxiliarService: ConfiguracaoAuxiliarService
    ) { }

    buscar(codigoCliente: number, loader: boolean): Observable<ProdutoCarrinhoDTO[]> {
        let parametros: HttpParams = new HttpParams();
        parametros = parametros.append('codigoCliente', codigoCliente + '');
        return this.requisicaoHttpService.Get<ProdutoCarrinhoDTO[]>(this.configuracaoAuxiliarService.getContextoSistema() + 'produtos-carrinho', {params: parametros}, loader, false, false);
    }

    adicionarProduto(codigoProduto: number, quantidade: number, codigoCliente: number, loader: boolean): Observable<void> {
        let parametros: HttpParams = new HttpParams();
        if (ValidationUtils.isNotEmpty(codigoProduto)) {
            parametros = parametros.append('codigoProduto', codigoProduto + '');
        }
        if (ValidationUtils.isNotEmpty(quantidade)) {
            parametros = parametros.append('quantidade', quantidade + '');
        }
        if (ValidationUtils.isNotEmpty(codigoCliente)) {
            parametros = parametros.append('codigoCliente', codigoCliente + '');
        }
        return this.requisicaoHttpService.Post<void>(this.configuracaoAuxiliarService.getContextoSistema() + 'produtos-carrinho', undefined, {params: parametros}, loader, false, false);
    }

}
