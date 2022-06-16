require('dotenv').config();
import util from 'util';
import amqp from 'amqplib';
import { IConfig, IEnvConfig, IMessage, QUEUE_TYPES } from './utils/types';
import validateEnv from './utils/validateEnv';

export abstract class Base {
  private user: string;
  private password: string;
  private host: string;
  private port: string;
  private vhost: string;
  private url: string;
  private channel: amqp.Channel;

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

    this.connect(this.url).then((res) => {
      this.channel = res;
    });
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

  protected async send(message: IMessage) {
    try {
      console.log('[Data]', message);

      this.channel.assertQueue(message.queue, {
        durable: true,
      });
      const sentStatus = this.channel.sendToQueue(
        message.queue,
        Buffer.from(JSON.stringify(message.data))
      );

      console.log('[MQ Status]', sentStatus);
      console.log(' [x] Sent %s', message.data);
    } catch (error) {
      console.log(error);
    }
  }

  async onReceive({
    queue,
  }: {
    queue: QUEUE_TYPES;
  }): Promise<amqp.ConsumeMessage> {
    if (this.channel) {
      this.channel?.assertQueue(queue, {
        durable: true,
      });
      this.channel.consume(queue, (msg) => {
        console.log(msg);
        console.log('[x] receiving messages');
        this.channel.ack(msg);

        return new Promise((resolve) => resolve(msg));
      });
    }

    return null;
  }
}
