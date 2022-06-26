import { IMessage, INotification } from './../utils/types';
import { Base } from '../base';
export declare class Notification extends Base {
    createNotification({ data, queue, }: IMessage<INotification>): void;
}
