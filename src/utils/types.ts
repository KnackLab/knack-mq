export declare type QUEUE_TYPES = 'email_notification';

export declare type IMessage = {
  queue: QUEUE_TYPES;
  data: any;
};

export declare type IConfig = {
  user: string;
  password: string;
  host: string;
  port: string;
  vhost: string;
};
