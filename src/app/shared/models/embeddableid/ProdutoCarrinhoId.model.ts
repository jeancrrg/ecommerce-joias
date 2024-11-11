import { Produto } from "../cadastro/Produto.model";
import { Cliente } from "../pedido/Cliente.model";

export class ProdutoCarrinhoId {
    cliente: Cliente;
    produto: Produto;
}
