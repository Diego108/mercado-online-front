import { Component, OnInit } from '@angular/core';

import { CategoriaService, Categoria, NotificationType } from 'src/app/share';
import { NotifierService } from 'angular-notifier';

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
  public nomeCategoriaPai: string;

  constructor(private notifierService: NotifierService,
              private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.nomeCategoriaPai = '';
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

  selectCheckBox(id: number, nome: string): void {

    if ( id !== this.idSelected ) {
      this.categoriasFilhas = [];
      this.validateIfHaveHierarchy(id);
      this.nomeCategoriaPai = nome;
      this.idSelected = id;
    } else {

      this.nomeCategoriaPai = '';
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

    return this.idSelected > 0;
  }

  habilitaBtnVisualizarHistorico(): boolean {

    return (this.categoriasFilhas !== undefined && this.categoriasFilhas.length > 0 && this.idSelected > 0);
  }

  habilitaMsgQuantidade(): boolean {

    return (this.categorias !== undefined && this.categorias.length > 0);
  }

  validateIfHaveHierarchy(id: number): void {
      this.categoriaService.findByCategoriaPai(id).subscribe(data => {
        this.categoriasFilhas = data;
      });

      if ((this.categoriasFilhas !== undefined && this.categoriasFilhas.length > 0)) {
        this.notifierService.show({
          type: NotificationType.SHOW_INFO,
          message: 'Categoria possuí filhos.',
        });
      }
  }
}
