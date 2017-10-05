import { Component, OnInit } from '@angular/core';
import { PedidosService } from "../../_service/pedidos.service";
import { Pedido } from "../../_model/pedido.model";

@Component({
  selector: 'app-pedido-listar',
  templateUrl: './pedido_listar.component.html'
  //styleUrls: ['./pedido.listar.component.css']
})
export class PedidoListarComponent implements OnInit {

  private pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidosService) { }

  ngOnInit() {
    this.pedidoService.getPedidos()
      .subscribe(data => this.pedidos = data);
  }

  deletePedido(pedido){
    if (confirm("Tem certeza que deseja excluir o pedido: " + pedido.name + "?")) {
      var index = this.pedidos.indexOf(pedido);
      this.pedidos.splice(index, 1);

      this.pedidoService.deletePedido(pedido.id)
        .subscribe(null,
          err => {
            alert("Cliente não excluído.");
            // Revert the view back to its original state
            this.pedidos.splice(index, 0, pedido);
          });
    }
  }

}
