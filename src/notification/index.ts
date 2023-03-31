import {
  IExpertRecommendationAttributes,
  IMatchRequestAttributes,
  IMessage,
  INotification,
  IProgramInvitationAttributes,
  ISurveyAttributes,
} from './../utils/types';
import { Base } from '../base';

export class Notification extends Base {
  createNotification({
    data,
    queue = 'event_notification',
  }: IMessage<INotification>) {
    this.send({ data, queue });
  }
}
