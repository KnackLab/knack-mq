import { Base } from '../base';

export class Email extends Base {
  sendEmail(data: any, queue = 'email_notification') {
    this.send({ data, queue });
  }
}
