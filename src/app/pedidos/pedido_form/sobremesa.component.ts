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
  selector: 'pedido-sobremesa',
  templateUrl: './sobremesa_pedido.html'
})
export class PedidoSobremsaComponent implements OnInit {

  formSobremesa: FormGroup;
  title: string;
  pedido: Pedido = new Pedido();

  selecSobremesas = [];
  selectedSobremesa;
  cliente : Cliente;

  produtoSobremesas;
  valorSobremesa;


    constructor( formBuilder: FormBuilder, private pedidosService: PedidosService, private router: Router) {
    window.setTimeout(()=>{
      this.selecSobremesas = [
        {value:1, name:"Sorvete", preco: 6},
        {value:2, name:"Açai", preco: 4},
        {value:3, name:"Chocolate", preco: 3}
      ]
    },100);
    
    this.formSobremesa = formBuilder.group({
      sobremesa: [],
      qntSobremesa: [],
      valorSobremesa:[]
    });

  }

   public ngOnInit() {
     


   }

  onFileSelection(e) {
    console.log(e.target.files[0].name)
  }
  

  save() {
    var result,
        userValue = this.formSobremesa.value;

    if (userValue.id){
      result = this.pedidosService.updatePedido(userValue);
    } else {
      result = this.pedidosService.addPedido(userValue);
    }

    result.subscribe(data => this.router.navigate(['pedidos']));
  }
}
