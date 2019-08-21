import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastrarCategoriaComponent } from './categoria/cadastrar';
import { EditarCategoriaComponent } from './categoria/editar';
import { ListarCategoriaComponent } from './categoria/listar';
import { RemoverCategoriaComponent } from './categoria/remover';
import { HierarquiaCategoriaComponent } from './categoria/hierarquia';
import { CadastrarLancamentoComponent } from './lancamento/cadastrar/';
import { ListarLancamentoComponent } from './lancamento/listar';
import { ShareModule, CategoriaService } from '../share';

@NgModule({
  declarations: [
    CadastrarCategoriaComponent,
    EditarCategoriaComponent,
    ListarCategoriaComponent,
    RemoverCategoriaComponent,
    HierarquiaCategoriaComponent,
    CadastrarLancamentoComponent,
    ListarLancamentoComponent,
    DashboardComponent
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
    RemoverCategoriaComponent,
    CadastrarLancamentoComponent,
    ListarLancamentoComponent,
    DashboardComponent
  ],
  providers : [
    CategoriaService
  ]
})
export class ComponentModule { }
