import { ProdutoCarrinhoId } from "./ProdutoCarrinhoId.model";

export class ProdutoCarrinho {
    produtoCarrinhoId: ProdutoCarrinhoId;
    quantidadeProduto: number;
    valorSubtotalProduto: number;
    dataUltimaAlteracao: Date;
    valorTotalCarrinho: number;
}
