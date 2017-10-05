import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Entregador } from '../_model/entregador.model';
 
@Injectable()
export class EntregadorService {

  private url: string = "/api/entregador";
  private entregador = new Array<Entregador>();

  constructor() {
    this.entregador = [
      {"idEntregador" : 1, "nome" : "Paulo", "placaVeiculo" : "HHj-2234"},
      {"idEntregador" : 2, "nome" : "Pedero", "placaVeiculo" : "HHj-3234"},
      {"idEntregador" : 3, "nome" : "Maria", "placaVeiculo" : "HHj-4234"}
   ]
 


}
