export class ProdutoCarrinhoDTO {
    codigo: number;
    nome: string;
    preco: number;
    quantidadeEstoque: number;
    listaUrlImagens: string[] = [];
    avaliacaoProduto: number;
    nomeCategoria: string;
    quantidadeProduto: number;
    valorSubtotalProduto: number;
    valorTotalCarrinho: number;
    codigoCliente: number;
}
