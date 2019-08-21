import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { CategoriaRouting } from './components/categoria';
import { LancamentoRoutingModule } from './components/lancamento';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'categoria/listar',
    pathMatch: 'full'
  },
  ...CategoriaRouting,
  ...LancamentoRoutingModule
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
