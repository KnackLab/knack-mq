import s from"util";import t from"amqplib";import{cleanEnv as e,str as o,port as r}from"envalid";require("dotenv").config();class i{constructor(t){this.user=void 0,this.password=void 0,this.host=void 0,this.port=void 0,this.vhost=void 0,this.url=void 0,this.canUseEnvConfig(t)?e(process.env,{RABBITMQ_HOST:o(),RABBITMQ_PASSWORD:o(),RABBITMQ_PORT:r({default:5672}),RABBITMQ_USER:o(),RABBITMQ_VHOST:o()}):(this.user=t.user,this.password=t.password,this.host=t.host,this.port=t.port,this.vhost=t.vhost),this.url=s.format("amqp://%s:%s@%s:%s/%s",this.user||process.env.RABBITMQ_USER,this.password||process.env.RABBITMQ_PASSWORD,this.host||process.env.RABBITMQ_HOST,this.port||process.env.RABBITMQ_PORT,this.vhost||process.env.RABBITMQ_VHOST)}canUseEnvConfig(s){return void 0!==s.useEnvironmentConfig}async connect(s){const e=await t.connect(s);return await e.createChannel()}async send(s){console.log("[Data]",s);const t=await this.connect(this.url);t.assertQueue(s.queue,{durable:!0});const e=t.sendToQueue(s.queue,Buffer.from(JSON.stringify(s.data)));console.log("[MQ Status]",e),console.log(" [x] Sent %s",s.data)}}class n extends i{}var a;a=n,[class extends i{sendEmail(s,t="email_notification"){this.send({data:s,queue:t})}}].forEach(s=>{Object.getOwnPropertyNames(s.prototype).forEach(t=>{Object.defineProperty(a.prototype,t,Object.getOwnPropertyDescriptor(s.prototype,t))})});export{n as default};
