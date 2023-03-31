import { IMessage } from '../utils/types';
import { Base } from '../base';

export class GenericMessage extends Base {
  createMessage({ data, queue }: IMessage) {
    this.send({ data, queue });
  }
}
