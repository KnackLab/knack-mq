export const SUPPORTED_QUEUES = [
  'email_notification',
  'event_notification',
] as const;

export declare type QUEUE_TYPES = typeof SUPPORTED_QUEUES[number];

export declare type IMessage = {
  queue: QUEUE_TYPES | string;
  data: any;
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
