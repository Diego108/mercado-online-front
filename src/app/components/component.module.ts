import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CadastrarCategoriaComponent } from './categoria/cadastrar';
import { EditarCategoriaComponent } from './categoria/editar';
import { ListarCategoriaComponent } from './categoria/listar';
import { RemoverCategoriaComponent } from './categoria/remover';
import { ShareModule, CategoriaService } from '../share';

@NgModule({
  declarations: [
    CadastrarCategoriaComponent,
    EditarCategoriaComponent,
    ListarCategoriaComponent,
    RemoverCategoriaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShareModule
  ],
  exports : [
    CadastrarCategoriaComponent,
    EditarCategoriaComponent,
    ListarCategoriaComponent,
    RemoverCategoriaComponent
  ],
  providers : [
    CategoriaService
  ]
})
export class ComponentModule { }
