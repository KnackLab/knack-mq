import { Email } from './email/index';
import { Notification } from './notification/index';
import { Base } from './base';
declare class KnackMQ extends Base {
}
interface KnackMQ extends Email, Notification {
}
export default KnackMQ;
