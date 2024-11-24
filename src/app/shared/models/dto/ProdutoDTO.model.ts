export class ProdutoDTO {
    codigo: number;
    nome: string;
    preco: number;
    quantidadeEstoque: number;
    descricaoDetalhada: string;
    listaUrlImagens: string[] = [];
    avaliacaoProduto: number;
    nomeCategoria: string;
}
