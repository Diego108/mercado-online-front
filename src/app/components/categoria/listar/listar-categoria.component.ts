import { Component, OnInit } from '@angular/core';

import { CategoriaService, Categoria } from 'src/app/share';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {

  public idSelected: number;
  public check: boolean;
  public categorias: Categoria[];
  public categoriasFilhas: Categoria[];
  public exibeEditar: boolean;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {

    this.idSelected = 0;
    this.check = false;
    this.exibeEditar = false;

    this.categoriaService.findAll().subscribe(
      data => {
        this.categorias = data;
        console.log(this.categorias);
      }
    );
  }

  isSelected(id: number): boolean {

    if (id !== this.idSelected || this.idSelected === 0) {

      return false;
    } else {

      return true;
    }
  }

  selectCheckBox(id: number): void {

    if ( id !== this.idSelected ) {

      this.idSelected = id;
    } else {

      this.idSelected = 0;
    }
  }

  findByCategoriaPai(idCategoria: number): void {

    this.categoriaService.findByCategoriaPai(idCategoria).subscribe( data => {
      this.categoriasFilhas = data;
    });
  }

  receiveEventOutput(listaDecategoria): void {
    this.categorias = listaDecategoria;
  }

  habilitaBtns(): boolean {

    return (this.categorias !== undefined && this.categorias.length > 0);
  }
}
