import { IMessage } from './../utils/types';
import { Base } from '../base';

export class Notification extends Base {
  createNotification({ data, queue = 'event_notification' }: IMessage) {
    this.send({ data, queue });
  }
}
