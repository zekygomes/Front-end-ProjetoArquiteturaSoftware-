import { Component, OnInit } from '@angular/core';
import { ProdutosService } from "../_service/produtos.service";
import { Produto } from "../_model/produto.model";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  private produtos: Produto[] = [];

  constructor(private pedidoService: ProdutosService) { }

  ngOnInit() {
    this.pedidoService.getProdutos()
      .subscribe(data => this.produtos = data);
  }

  deleteProduto(produto){
    if (confirm("Tem certeza que deseja excluir o produto: " + produto.name + "?")) {
      var index = this.produtos.indexOf(produto);
      this.produtos.splice(index, 1);

      this.pedidoService.deleteProduto(produto.id)
        .subscribe(null,
          err => {
            alert("Produto não excluído.");
            // Revert the view back to its original state
            this.produtos.splice(index, 0, produto);
          });
    }
  }

}
