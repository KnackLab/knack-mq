import util from 'util';
import amqp from 'amqplib';
import { IConfig, IMessage } from './utils/types';

export abstract class Base {
  private user: string;
  private password: string;
  private host: string;
  private port: string;
  private vhost: string;
  private url: string;

  constructor(config: IConfig) {
    this.user = config.user;
    this.password = config.password;
    this.host = config.host;
    this.port = config.port;
    this.vhost = config.vhost;
    this.url = util.format(
      'amqp://%s:%s@%s:%s/%s',
      this.user,
      this.password,
      this.host,
      this.port,
      this.vhost
    );
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
    console.log(' [x] Sent %s', message.data);
    console.log('[connectionURL]', this.url);

    const channel = await this.connect(this.url);

    console.log('[Channel]', channel);

    channel.assertQueue(message.queue, {
      durable: true,
    });

    channel.sendToQueue(message.queue, Buffer.from(message.data));
  }
}
