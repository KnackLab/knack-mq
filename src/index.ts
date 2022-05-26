import { Email } from './email/index';
import { Base } from './base';
import { applyMixins } from './utils/mixins';

class KnackMQ extends Base {}
interface KnackMQ extends Email {}

applyMixins(KnackMQ, [Email]);

export default KnackMQ;
