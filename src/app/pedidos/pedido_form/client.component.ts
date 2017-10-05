import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MaterializeDirective } from "angular2-materialize";

import { Pedido } from '../../_model/pedido.model';
import { Produto } from '../../_model/produto.model';
import { Cliente } from '../../_model/cliente.model';
import { PedidosService } from '../../_service/pedidos.service';
import { BasicValidators } from '../../shared/basic-validators';
import { ClientesService } from '../../_service/clientes.service';
import { ProdutosService } from '../../_service/produtos.service';
import { EntregadorService } from '../../_service/entregador.service';

@Component({
  selector: 'pedido-cliente',
  templateUrl: './cliente_pedido.html'
})
export class PedidoClienteComponent {

  formCliente: FormGroup;
  title: string;
  pedido: Pedido = new Pedido();

  selectClientes = [];
  selectedCliente;
  cliente : Cliente;

  constructor( private _produtoService : ProdutosService,formBuilder: FormBuilder, private router: Router,
                private route: ActivatedRoute, private pedidosService: PedidosService
  ) {
  window.setTimeout(()=>{
      this.selectClientes = [
        {value:1, name:"Cliente 01", preco: 6},
        {value:2, name:"Cliente 02", preco: 4},
        {value:3, name:"Cliente 03", preco: 3}
      ]
      },100);
    this.formCliente = formBuilder.group({
      cliente: [],
    });
  }


  onFileSelection(e) {
    console.log(e.target.files[0].name)
  }
  

  save() {
    var result,
        userValue = this.formCliente.value;

    if (userValue.id){
      result = this.pedidosService.updatePedido(userValue);
    } else {
      result = this.pedidosService.addPedido(userValue);
    }

    result.subscribe(data => this.router.navigate(['pedidos']));
  }
}
