import { Email } from './email/index';
import { Notification } from './notification/index';
import { Base } from './base';
import { applyMixins } from './utils/mixins';

class KnackMQ extends Base {}
interface KnackMQ extends Email, Notification {}

applyMixins(KnackMQ, [Email, Notification]);

export default KnackMQ;
