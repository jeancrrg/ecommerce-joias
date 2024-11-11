import { ProdutoCarrinhoId } from "../embeddableid/ProdutoCarrinhoId.model";

export class ProdutoCarrinho {
    produtoCarrinhoId: ProdutoCarrinhoId;
    quantidadeProduto: number;
    valorSubtotalProduto: number;
    dataUltimaAlteracao: Date;
    valorTotalCarrinho: number;
}
