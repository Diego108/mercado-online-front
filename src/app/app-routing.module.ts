import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { CategoriaRouting } from './components/categoria';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'categoria/listar',
    pathMatch: 'full'
  },
  ...CategoriaRouting
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
