import { QUEUE_TYPES } from './../utils/types';
import { Base } from '../base';

export class Email extends Base {
  private queue: QUEUE_TYPES = 'email_notification';

  sendEmail(data: any) {
    this.send({ data, queue: this.queue });
  }
}
