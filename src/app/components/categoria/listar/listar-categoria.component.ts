import { Component, OnInit } from '@angular/core';

import { CategoriaService, Categoria } from '../../../share';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {

  public categorias: Categoria[];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {

    this.categoriaService.findAll().subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
