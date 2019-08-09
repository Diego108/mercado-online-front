import { Component, OnInit } from '@angular/core';

import { NotifierService } from 'angular-notifier';

import { CategoriaService, Categoria, NotificationType } from 'src/app/share';

@Component({
  selector: 'app-cadastrar-categoria',
  templateUrl: './cadastrar-categoria.component.html',
  styleUrls: ['./cadastrar-categoria.component.css']
})
export class CadastrarCategoriaComponent implements OnInit {

  public categoria: Categoria;

  constructor(private notifierService: NotifierService,
              private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categoria = new Categoria();
  }

  salvar(): void {
    this.categoriaService.save(this.categoria).subscribe( data => {

      this.categoria = data;

      if (this.categoria !== null) {
        this.limparCampos();
        this.notifierService.show({
          type: NotificationType.SHOW_SUCCESS,
          message: 'Categoria cadastrada com sucesso.',
        });
      }
    }, error => {
      this.limparCampos();
      this.notifierService.show({
        type: NotificationType.SHOW_WARNING,
        message: 'Categoria não foi salva, verifique se digitou da forma correta.'
      });
    });
  }

  limparCampos(): void {
    this.categoria.id = null;
    this.categoria.nome = null;
  }
}
