import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';

import { NotifierService } from 'angular-notifier';

import { CategoriaService, NotificationType, Categoria } from 'src/app/share';
@Component({
  selector: 'app-remover-categoria',
  templateUrl: './remover-categoria.component.html',
  styleUrls: ['./remover-categoria.component.css']
})
export class RemoverCategoriaComponent implements OnInit {

  @Input()
  public id: number;

  @Output()
  public categorias = new EventEmitter();

  constructor(private notifierService: NotifierService,
              private categoriaService: CategoriaService) { }

  ngOnInit() { }

  deletarCategoria(): void {

    this.categoriaService.delete(this.id).subscribe(data => {
      if (data === true) {
        this.categoriaService.findAll().subscribe( data => {
          this.categorias.emit(data);
        });
        this.notifierService.show({
          type: NotificationType.SHOW_SUCCESS,
          message: 'Categoria deletada com sucesso.',
        });
      } else {
        this.notifierService.show({
          type: NotificationType.SHOW_WARNING,
          message: 'Categoria não encontrada, contacte o administrador para mais informações.',
        });
      }
    });
  }
}
