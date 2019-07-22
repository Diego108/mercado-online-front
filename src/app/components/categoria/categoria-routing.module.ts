import { Routes } from '@angular/router';

import { ListarCategoriaComponent } from './listar';
import { RemoverCategoriaComponent } from './remover/remover-categoria.component';
import { EditarCategoriaComponent } from './editar';
import { CadastrarCategoriaComponent } from './cadastrar';

export const CategoriaRouting: Routes = [
  {
    path: 'categoria/cadastrar',
    component: CadastrarCategoriaComponent
  },
  {
    path: 'categoria/editar',
    component: EditarCategoriaComponent
  },
  {
    path: 'categoria/listar',
    component: ListarCategoriaComponent
  },
  {
    path: 'categoria/remover',
    component: RemoverCategoriaComponent
  }
];
