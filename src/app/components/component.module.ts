import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrarCategoriaComponent } from './categoria/cadastrar';
import { EditarCategoriaComponent } from './categoria/editar';
import { ListarCategoriaComponent } from './categoria/listar';
import { RemoverCategoriaComponent } from './categoria/remover';


@NgModule({
  declarations: [
    CadastrarCategoriaComponent,
    EditarCategoriaComponent,
    ListarCategoriaComponent,
    RemoverCategoriaComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    CadastrarCategoriaComponent,
    EditarCategoriaComponent,
    ListarCategoriaComponent,
    RemoverCategoriaComponent
  ]
})
export class ComponentModule { }
