export const SUPPORTED_QUEUES = [
  'email_notification',
  'event_notification',
] as const;

export declare type QUEUE_TYPES = typeof SUPPORTED_QUEUES[number];

export declare type IMessage<T = any> = {
  queue?: QUEUE_TYPES;
  data: T;
};

export declare type IConfig = {
  user: string;
  password: string;
  host: string;
  port: string;
  vhost: string;
};

export declare type IEnvConfig = {
  useEnvironmentConfig: boolean;
};

export type onConsume<T> = {
  queue: QUEUE_TYPES;
  callback: (msg: T) => void;
};

export declare type INotification =
  | IProgramInvitationAttributes
  | IMatchRequestAttributes
  | IExpertRecommendationAttributes
  | ISurveyAttributes;

export declare type IProgramInvitationAttributes = {
  programInvitation: string;
};

export declare type IMatchRequestAttributes = {
  matchRequest: string;
};

export declare type IExpertRecommendationAttributes = {
  program: string;
};

export declare type ISurveyAttributes = {
  surveyInvitation: string;
};
