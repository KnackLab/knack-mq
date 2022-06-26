import amqp from 'amqplib';
import { IConfig, IEnvConfig, IMessage, onConsume } from './utils/types';
export declare class Base {
    private user;
    private password;
    private host;
    private port;
    private vhost;
    private url;
    private channel;
    constructor(config: IConfig | IEnvConfig);
    getChannel(): amqp.Channel;
    private canUseEnvConfig;
    private connect;
    protected send(message: IMessage): Promise<void>;
    onReceive(consumable: onConsume<amqp.ConsumeMessage>): Promise<void>;
    private listen;
}
