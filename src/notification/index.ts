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
  // private determineUnionType(
  //   data: IProgramInvitationAttributes |
  //     IMatchRequestAttributes |
  //     IExpertRecommendationAttributes |
  //     ISurveyAttributes
  // ): data is IProgramInvitationAttributes |
  //   IMatchRequestAttributes |
  //   IExpertRecommendationAttributes |
  //   ISurveyAttributes {
  //   if ((<IProgramInvitationAttributes>data).programInvitation)
  //     return (
  //       (<IProgramInvitationAttributes>data).programInvitation !== undefined
  //     );
  //   if ((<IMatchRequestAttributes>data).matchRequest)
  //     return (<IMatchRequestAttributes>data).matchRequest !== undefined;
  //   if ((<IExpertRecommendationAttributes>data).program)
  //     return (<IExpertRecommendationAttributes>data).program !== undefined;
  //   if ((<ISurveyAttributes>data).surveyInvitation)
  //     return (<ISurveyAttributes>data).surveyInvitation !== undefined;
  // }

  createNotification({
    data,
    queue = 'event_notification',
  }: IMessage<INotification>) {
    this.send({ data, queue });
  }
}
