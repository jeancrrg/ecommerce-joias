export class ProdutoDTO {
    codigo: number;
    nome: string;
    preco: number;
    quantidadeEstoque: number;
    descricaoDetalhada: string;
    listaUrlImagensProduto: string[] = [];
    avaliacao: number;
}
