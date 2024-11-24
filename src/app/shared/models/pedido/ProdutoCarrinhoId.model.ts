import { Produto } from "../cadastro/Produto.model";
import { Cliente } from "./Cliente.model";

export class ProdutoCarrinhoId {
    cliente: Cliente;
    produto: Produto;
}
