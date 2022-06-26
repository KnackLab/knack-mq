import { IMessage } from './../utils/types';
import { Base } from '../base';
export declare class Email extends Base {
    sendEmail({ data, queue }: IMessage): void;
}
