import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Cliente } from '../_model/cliente.model';
 
@Injectable()
export class ClientesService {

  private url: string = "/api/cliente";
  private cliente = new Cliente;

  constructor(private http: Http) { }

  getClientes(){
    return this.http.get(this.url + "/pegar-todos")
      .map(res => res.json());
  }

  getCliente(id){
    return this.http.get(this.getClienteUrl(id))
      .map(res => res.json());
  }

  addCliente(cliente : Cliente){
    return this.http.get("/api/cliente/salvar?nome="+cliente.nome+
                                            "&email="+cliente.email+
                                            "&endereco="+cliente.endereco+
                                            "&telefone="+cliente.telefone+
                                            "&pontoDeReferencia="+cliente.pontoDeReferencia+
                                            "&situacao="+cliente.situacao)
      .subscribe(res => {alert(res.json())});
  }

  /*addCliente(cliente){
    return this.http.post(this.url + "/salvar", JSON.stringify(cliente))
      .map(res => res.json());
  }*/

  updateCliente(cliente){
    return this.http.put(this.getClienteUrl(cliente.id), JSON.stringify(cliente))
      .map(res => res.json());
  }

  deleteCliente(id: number){
    return this.http.get(this.url + "/apagar?id="+ id);
      
  }

  private getClienteUrl(id : number){
    return this.url + "/pegar-por-id?id="+id;
  }
}
