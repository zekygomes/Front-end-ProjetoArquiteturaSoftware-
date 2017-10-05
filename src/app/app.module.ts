import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import {MdIconModule} from '@angular/material';


import { ClienteComponent } from './clientes/cliente.component';
import { ClientesService } from './_service/clientes.service';
import { ClienteFormComponent } from './clientes/cliente_form/cliente_form.component';
import { ClienteListarComponent } from "./clientes/cliente_listar/cliente_listar.component";

import { PedidoComponent } from './pedidos/pedido.component';
import { PedidosService } from './_service/pedidos.service';
import { PedidoFormComponent } from './pedidos/pedido_form/pedido_form.component';
import { PedidoListarComponent } from './pedidos/pedido_listar/pedido_listar.component';

import { ProdutoComponent } from './produtos/produto.component';
import { ProdutosService } from './_service/produtos.service';
import { ProdutoFormComponent } from './produtos/produto_form/produto_form.component';
import { ProdutoListarComponent } from './produtos/produto_listar/produto_listar.component';

import { PedidoBebidaComponent } from './pedidos/pedido_form/bebida.component';
import { PedidoRefeicaoComponent } from './pedidos/pedido_form/refeicao.component';
import { PedidoSobremsaComponent } from './pedidos/pedido_form/sobremesa.component';
import { PedidoClienteComponent } from './pedidos/pedido_form/client.component';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routing } from './app.routing';
import { homeRouting } from './home/home.routing';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    NavBarComponent,
    ClienteComponent,
    ClienteFormComponent,
    ClienteListarComponent,
    PedidoComponent,
    PedidoFormComponent,
    PedidoListarComponent,
    ProdutoComponent,
    ProdutoFormComponent,
    ProdutoListarComponent,
    PedidoBebidaComponent,
    PedidoSobremsaComponent,
    PedidoRefeicaoComponent,
    PedidoBebidaComponent,
    PedidoClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    MdIconModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    homeRouting,
    routing
  ],
  exports:[
    
  ],
  providers: [
    ClientesService,
    PedidosService,
    ProdutosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
