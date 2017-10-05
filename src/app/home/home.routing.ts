import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from '../clientes/cliente.component';
import { ClienteFormComponent } from "../clientes/cliente_form/cliente_form.component";
import { ClienteListarComponent } from "../clientes/cliente_listar/cliente_listar.component";

import { PedidoComponent } from '../pedidos/pedido.component';
import { PedidoFormComponent } from "../pedidos/pedido_form/pedido_form.component";
import { PedidoListarComponent } from "../pedidos/pedido_listar/pedido_listar.component";

import { ProdutoComponent } from '../produtos/produto.component';
import { ProdutoFormComponent } from '../produtos/produto_form/produto_form.component';
import { ProdutoListarComponent } from '../produtos/produto_listar/produto_listar.component';

import { PedidoBebidaComponent } from '../pedidos/pedido_form/bebida.component';
import { PedidoRefeicaoComponent } from '../pedidos/pedido_form/refeicao.component';
import { PedidoSobremsaComponent } from '../pedidos/pedido_form/sobremesa.component';
import { PedidoClienteComponent } from '../pedidos/pedido_form/client.component';

const homeRoutes: Routes = [
  { path: 'pedidos', component: PedidoComponent, pathMatch: 'full' },
  { path: 'pedidos/novo', component: PedidoFormComponent},
  { path: 'pedidos/client', component: PedidoClienteComponent},
  { path: 'pedidos/refeicao', component: PedidoRefeicaoComponent},
  { path: 'pedidos/sobremesa', component: PedidoSobremsaComponent},
  { path: 'pedidos/bebida', component: PedidoBebidaComponent},
  { path: 'pedidos/listar', component: PedidoListarComponent},
  { path: 'clientes', component: ClienteComponent, pathMatch: 'full' },
  { path: 'clientes/novo', component: ClienteFormComponent},
  { path: 'clientes/listar', component: ClienteListarComponent},
  { path: 'produtos', component: ProdutoComponent, pathMatch: 'full' },
  { path: 'produtos/novo', component: ProdutoFormComponent},
  { path: 'produtos/listar', component: ProdutoListarComponent},
];

export const homeRouting = RouterModule.forChild(homeRoutes);