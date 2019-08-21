import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { CadastrarLancamentoComponent } from './cadastrar';
import { ListarLancamentoComponent } from './listar';

export const LancamentoRoutingModule: Routes = [
  {
    path: 'lancamento/cadastrar',
    component: CadastrarLancamentoComponent
  },
  {
    path: 'lancamento/listar',
    component: ListarLancamentoComponent
  }
];
