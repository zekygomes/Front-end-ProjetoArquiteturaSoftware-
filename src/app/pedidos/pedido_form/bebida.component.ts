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
  selector: 'pedido-bebida',
  templateUrl: './bebida_pedido.html'
})
export class PedidoBebidaComponent  {

  formBebida: FormGroup;
  title: string;
  pedido: Pedido = new Pedido();

  qntTotalBebida:number;
  qntBebida;

  selectBebidas = [];
  selectedBebida;

    constructor( private _produtoService : ProdutosService,formBuilder: FormBuilder, private router: Router,
                private route: ActivatedRoute, private pedidosService: PedidosService
  ) {

    window.setTimeout(()=>{

        this.selectBebidas = [
          {value:1, name:"Cerveja", preco: 6},
          {value:2, name:"Refrigerante", preco: 4},
          {value:3, name:"Suco", preco: 3}
        ]
      },100);

    this.formBebida = formBuilder.group({
      bebida: [],
      qntBebida: [],
      valorBebida:[]
    });
  }

 

  onFileSelection(e) {
    console.log(e.target.files[0].name)
  }
  

  save() {
    var result,
        userValue = this.formBebida.value;

    if (userValue.id){
      result = this.pedidosService.updatePedido(userValue);
    } else {
      result = this.pedidosService.addPedido(userValue);
    }

    result.subscribe(data => this.router.navigate(['pedidos']));
  }
}
