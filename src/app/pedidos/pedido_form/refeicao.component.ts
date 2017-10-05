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
  selector: 'pedido-refeicao',
  templateUrl: './refeicao_pedido.html'
})
export class PedidoRefeicaoComponent {

  formRefeicao: FormGroup;
  title: string;
  pedido: Pedido = new Pedido();

  selectRefeicoes = [];
  selectedRefeicao;

  precoRefeicao;
  produtoRefeicao;
  valorRefeicao;


    constructor( private _produtoService : ProdutosService,formBuilder: FormBuilder, private router: Router,
                private route: ActivatedRoute, private pedidosService: PedidosService
  ) {
      window.setTimeout(()=>{
      this.selectRefeicoes = [
        {value:1, name:"Pizza", preco: 6},
        {value:2, name:"Sandwich", preco: 4},
        {value:3, name:"Esfirra", preco: 3}
      ]
      },100);

    this.formRefeicao = formBuilder.group({
      refeicoes: [],
      qntRefeicao: [],
      valorRefeicao: []
     });
  }
  

  onFileSelection(e) {
    console.log(e.target.files[0].name)
  }
  

  save() {
  }
}
