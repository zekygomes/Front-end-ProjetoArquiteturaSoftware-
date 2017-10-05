import { Produto } from './produto.model';
import { Pedido } from './pedido.model';
import { Entregador } from './entregador.model';

export class ItensPedido{
    idItensPedido : number;
    precoUnitario : number;
    qtdProdutos : number;
    precoTotal : number;
    pedido : Pedido;
    produto : Produto;
}
