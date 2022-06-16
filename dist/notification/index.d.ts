import { IMessage } from 'src/utils/types';
import { Base } from '../base';
export declare class Notification extends Base {
    createNotification({ data, queue }: IMessage): void;
}
