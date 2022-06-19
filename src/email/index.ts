import { IMessage } from './../utils/types';
import { Base } from '../base';

export class Email extends Base {
  sendEmail({ data, queue = 'email_notification' }: IMessage) {
    this.send({ data, queue });
  }
}
