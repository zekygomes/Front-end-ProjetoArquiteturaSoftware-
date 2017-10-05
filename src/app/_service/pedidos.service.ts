import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Produto } from '../_model/produto.model';
import { Pedido } from '../_model/pedido.model';


@Injectable()
export class PedidosService {

  private url: string = "/api/pedido";

  constructor(private http: Http) { }

  private pedido = new Pedido;

  getPedidos(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getPedido(id){
    return this.http.get(this.getPedidoUrl(id))
      .map(res => res.json());
  }

  addPedido(pedido){
    return this.http.get("/api/pedido/salvar?itensPedido="+this.pedido.itensPedido+
                                            "&idCliente="+this.pedido.idCliente+
                                            "&dataPedido="+this.pedido.dataPedido+
                                            "&valorTotal="+this.pedido.valorTotal+
                                            "&idEntregador="+this.pedido.idEntregador+
                                            "&formaPagamento="+this.pedido.formaPagamento+
                                            "&status="+this.pedido.status)
      .map(res => res.json());
  }

  /*addPedido(pedido){
    return this.http.post(this.url + "/salvar", JSON.stringify(pedido))
      .map(res => res.json());
  }*/

  updatePedido(pedido){
    return this.http.put(this.getPedidoUrl(pedido.id), JSON.stringify(pedido))
      .map(res => res.json());
  }

  deletePedido(id){
    return this.http.delete(this.getPedidoUrl(id))
      .map(res => res.json());
  }

  private getPedidoUrl(id){
    return this.url + "/" + id;
  }
}