import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaService } from './services';
import { NotificationMessage } from './notification/notification-message.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers : [
    CategoriaService,
    NotificationMessage
  ]
})
export class ShareModule { }
