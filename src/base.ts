require('dotenv').config();
import util from 'util';
import amqp from 'amqplib';
import { IConfig, IEnvConfig, IMessage } from './utils/types';
import validateEnv from './utils/validateEnv';

export abstract class Base {
  private user: string;
  private password: string;
  private host: string;
  private port: string;
  private vhost: string;
  private url: string;

  constructor(config: IConfig | IEnvConfig) {
    if (!this.canUseEnvConfig(config)) {
      this.user = config.user;
      this.password = config.password;
      this.host = config.host;
      this.port = config.port;
      this.vhost = config.vhost;
    } else {
      validateEnv();
    }

    this.url = util.format(
      'amqp://%s:%s@%s:%s/%s',
      this.user || process.env.RABBITMQ_USER,
      this.password || process.env.RABBITMQ_PASSWORD,
      this.host || process.env.RABBITMQ_HOST,
      this.port || process.env.RABBITMQ_PORT,
      this.vhost || process.env.RABBITMQ_VHOST
    );
  }

  private canUseEnvConfig(config: IConfig | IEnvConfig): config is IEnvConfig {
    return (<IEnvConfig>config).useEnvironmentConfig !== undefined;
  }

  private async connect(
    url: string | amqp.Options.Connect
  ): Promise<amqp.Channel> {
    const conn = await amqp.connect(url);
    const channel = await conn.createChannel();

    return channel;
  }

  // TODO: - Refactor function to accept strongly typed message object
  // e.g new Message({}: Onboarding)
  // onboarding would have a static type
  // and properties it accepts

  protected async send(message: IMessage): Promise<void> {
    console.log('[Data]', message);
    const channel = await this.connect(this.url);
    channel.assertQueue(message.queue, {
      durable: true,
    });
    const sentStatus = channel.sendToQueue(
      message.queue,
      Buffer.from(JSON.stringify(message.data))
    );
    console.log('[MQ Status]', sentStatus);
    console.log(' [x] Sent %s', message.data);
  }
}
