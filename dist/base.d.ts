import { IConfig, IEnvConfig, IMessage } from './utils/types';
export declare abstract class Base {
    private user;
    private password;
    private host;
    private port;
    private vhost;
    private url;
    constructor(config: IConfig | IEnvConfig);
    private canUseEnvConfig;
    private connect;
    protected send(message: IMessage): Promise<void>;
}
