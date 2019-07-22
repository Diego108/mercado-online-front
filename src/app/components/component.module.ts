import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarCategoriaComponent } from './categoria/cadastrar/cadastrar-categoria.component';
import { EditarCategoriaComponent } from './categoria/editar/editar-categoria.component';
import { ListarCategoriaComponent } from './categoria/listar/listar-categoria.component';
import { RemoverCategoriaComponent } from './categoria/remover/remover-categoria.component';



@NgModule({
  declarations: [CadastrarCategoriaComponent, EditarCategoriaComponent, ListarCategoriaComponent, RemoverCategoriaComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentModule { }
