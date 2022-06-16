import amqp from 'amqplib';
import { IConfig, IEnvConfig, IMessage, QUEUE_TYPES } from './utils/types';
export declare abstract class Base {
    private user;
    private password;
    private host;
    private port;
    private vhost;
    private url;
    private channel;
    constructor(config: IConfig | IEnvConfig);
    private canUseEnvConfig;
    private connect;
    protected send(message: IMessage): Promise<void>;
    onReceive({ queue, }: {
        queue: QUEUE_TYPES;
    }): Promise<amqp.ConsumeMessage>;
}
