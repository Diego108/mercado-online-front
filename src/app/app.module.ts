import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { NotifierModule } from 'angular-notifier';

import { ShareModule , CategoriaService } from './share';
import { ComponentModule } from './components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NotifierModule.withConfig( {
      position : {
        horizontal: {
          position: 'right',
          distance: 12
        },
        vertical: {
          position: 'top',
          distance: 12
        }
      },
      behaviour: {
        onClick: false,
        showDismissButton: false,
        autoHide: 2000
      }
    } ),
    HttpClientModule,
    AppRoutingModule,
    ShareModule,
    ComponentModule
  ],
  providers: [
    CategoriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
