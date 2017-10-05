import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MaterializeDirective } from "angular2-materialize";

import { PedidoBebidaComponent } from './bebida.component';
import { PedidoRefeicaoComponent } from './refeicao.component';
import { PedidoSobremsaComponent } from './sobremesa.component';
import { PedidoClienteComponent } from './client.component';

import { Pedido } from '../../_model/pedido.model';
import { Produto } from '../../_model/produto.model';
import { Cliente } from '../../_model/cliente.model';
import { PedidosService } from '../../_service/pedidos.service';
import { BasicValidators } from '../../shared/basic-validators';
import { ClientesService } from '../../_service/clientes.service';
import { ProdutosService } from '../../_service/produtos.service';
import { EntregadorService } from '../../_service/entregador.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido_form.component.html'
})
export class PedidoFormComponent implements OnInit {

  pedido: Pedido = new Pedido();
  cliente : Cliente;

  sobremesas = PedidoBebidaComponent;

  constructor() {
          
      }
   
  

   public ngOnInit() {
     
   }

  onFileSelection(e) {
    console.log(e.target.files[0].name)
  }
  

  save() {

  }
}
