import { OnInit, Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NotificationType } from '.';

@Injectable()
export class NotificationMessage {

  constructor(private notifierService: NotifierService) {}

  showMessageSucess(msg: string) {
    this.notifierService.show({
      type: NotificationType.SHOW_SUCCESS,
      message: msg,
    });
  }

  showMessageInfo(msg: string) {
    this.notifierService.show({
      type: NotificationType.SHOW_INFO,
      message: msg,
    });
  }
  showMessageWarning(msg: string) {
    this.notifierService.show({
      type: NotificationType.SHOW_WARNING,
      message: msg,
    });
  }
  showMessageError(msg: string) {
    this.notifierService.show({
      type: NotificationType.SHOW_ERROR,
      message: msg,
    });
  }
  showMessageDefault(msg: string) {
    this.notifierService.show({
      type: NotificationType.SHOW_DEFAULT,
      message: msg,
    });
  }
}
