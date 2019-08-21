import { Component, OnInit } from '@angular/core';

import { NotifierService } from 'angular-notifier';

import { CategoriaService, Categoria, NotificationType } from 'src/app/share';
import { NotificationMessage } from 'src/app/share/notification/notification-message.service';

@Component({
  selector: 'app-cadastrar-categoria',
  templateUrl: './cadastrar-categoria.component.html',
  styleUrls: ['./cadastrar-categoria.component.css']
})
export class CadastrarCategoriaComponent implements OnInit {

  public categoria: Categoria;
  public categorias: Categoria[];
  public idCategoriaPai: number;

  constructor(private notifierMessage: NotificationMessage,
              private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.idCategoriaPai = 0;
    this.categoria = new Categoria();
    this.carregarLista();
  }

  carregarLista(): void{
    this.categoriaService.findAll().subscribe(data => {
      this.categorias = data;
    });
  }

  salvar(): void {

    if(this.idCategoriaPai !== null){
      this.categoria.idPai = this.idCategoriaPai;
    }

    this.categoriaService.save(this.categoria).subscribe( data => {
      this.categoria = data;
      if (this.categoria !== null) {
        this.carregarLista();
        this.limparCampos();
        this.notifierMessage.showMessageSucess('Categoria cadastrada com sucesso.')
      }
    }, error => {
      this.limparCampos();
      this.notifierMessage.showMessageWarning('Categoria não foi salva, verifique se digitou da forma correta.')
    });
  }

  limparCampos(): void {
    this.categoria.id = null;
    this.categoria.nome = null;
    this.categoria.idPai = 0;
  }
}
