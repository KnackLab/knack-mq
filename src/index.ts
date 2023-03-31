import { Email } from './email/index';
import { Notification } from './notification/index';
import { Base } from './base';
import { applyMixins } from './utils/mixins';
import { GenericMessage } from './generic';

class KnackMQ extends Base {}
interface KnackMQ extends Email, Notification, GenericMessage {}

applyMixins(KnackMQ, [Email, Notification, GenericMessage]);

export default KnackMQ;
