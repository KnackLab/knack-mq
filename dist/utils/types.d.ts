export declare const SUPPORTED_QUEUES: readonly ["email_notification", "event_notification"];
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
export declare type onConsume<T> = {
    queue: QUEUE_TYPES;
    callback: (msg: T) => void;
};
export declare type INotification = IProgramInvitationAttributes | IMatchRequestAttributes | IExpertRecommendationAttributes | ISurveyAttributes;
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
