import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Cliente } from '../../_model/cliente.model';
import { ClientesService } from '../../_service/clientes.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente_form.component.html',
  styleUrls: ['./cliente_form.component.css']
})
export class ClienteFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  cliente: Cliente = new Cliente();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private clientesService: ClientesService
  ) {
    this.form = formBuilder.group({
      nome: [],
      email: ['', [
        Validators.required,
        BasicValidators.email
        //Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      endereco: [],
      telefone: [],
      pontoDeReferencia: [],
      situacao: [
      ]
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Editar Cliente' : 'Novo Cliente';

      if (!id)
        return;

      this.clientesService.getCliente(id)
        .subscribe(
          cliente => this.cliente = cliente,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    var result,
        userValue = this.form.value;

        console.log(userValue);
    if (userValue.id){
      result = this.clientesService.updateCliente(userValue);
    } else {
      result = this.clientesService.addCliente(userValue);
    }

    result.subscribe(data => this.router.navigate(['clientes']));
  }
}
