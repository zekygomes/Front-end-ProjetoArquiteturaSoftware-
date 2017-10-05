import { Produto } from './produto.model';
import { Cliente } from './cliente.model';
import { Entregador } from './entregador.model';

export class Pedido{
    idPedido : number;
    dataPedido : Date;
    idEntregador : number;
    idCliente : number;
    itensPedido : {
        id : number;
        precoUnitario : number,
        qtdProdutos : number,
        precoTotal : number,
        pedido : Pedido,
        produto : Produto
    };
    formaPagamento : string;
    status : string;
    valorTotal : number;

}
