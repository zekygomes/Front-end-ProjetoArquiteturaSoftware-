import { Component, OnInit } from '@angular/core';
import { ProdutosService } from "../../_service/produtos.service";
import { Produto } from "../../_model/produto.model";

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './produto_listar.component.html'
})
export class ProdutoListarComponent implements OnInit {

  private produtos: Produto[] = [];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.getProdutos()
      .subscribe(data => this.produtos = data);
  }

  deleteProduto(produto : Produto){
    if (confirm("Tem certeza que deseja excluir o cliente: " + produto.nome + "?")) {
      var index = this.produtos.indexOf(produto);
      this.produtos.splice(index, 1);

      this.produtosService.deleteProduto(produto.codProduto)
        .subscribe(null,
          err => {
            alert("Produto não excluído.");
            // Revert the view back to its original state
            this.produtos.splice(index, 0, produto);
          });
    }
  }

}
