import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NotifierService } from 'angular-notifier';

import { CategoriaService, Categoria, NotificationType } from 'src/app/share';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {

  @Input()
  public id: number;

  @Output()
  public categorias = new EventEmitter();

  public nomeCategoria: string;
  public categoria: Categoria;

  constructor(private notifierService: NotifierService,
              private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categoria = new Categoria();
  }

  editarCategoria(): void {

    this.categoria.id = this.id;
    this.categoria.nome = this.nomeCategoria;

    if (this.validarCampos(this.categoria)) {

      this.categoriaService.editar(this.categoria).subscribe(data => {
        if (data) {
          this.categoriaService.findAll().subscribe(dataA => {
            this.categorias.emit(dataA);
          });
          this.notifierService.show({
            type: NotificationType.SHOW_SUCCESS,
            message: 'Categoria editada com sucesso.',
          });
        }
      });
    } else {

      this.notifierService.show({
        type: NotificationType.SHOW_WARNING,
        message: 'Favor selecionar alguma categoria e digitar um nome para atualizar.',
      });
    }
    this.limparDados();
  }

  limparDados(): void {

    this.nomeCategoria = null;
  }

  validarCampos(categoria: Categoria): boolean {

    if (categoria.id <= 0 || categoria.nome === null || categoria.nome.length === 0) {
      return false;
    } else {
      return true;
    }
  }
}
