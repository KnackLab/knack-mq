!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("util"),require("amqplib"),require("envalid")):"function"==typeof define&&define.amd?define(["util","amqplib","envalid"],e):(t||self).knackMq=e(t.util,t.amqplib,t.envalid)}(this,function(t,e,o){function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=/*#__PURE__*/r(t),s=/*#__PURE__*/r(e);function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,u(t,e)}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}require("dotenv").config();var c,p=/*#__PURE__*/function(){function t(t){this.user=void 0,this.password=void 0,this.host=void 0,this.port=void 0,this.vhost=void 0,this.url=void 0,this.canUseEnvConfig(t)?o.cleanEnv(process.env,{RABBITMQ_HOST:o.str(),RABBITMQ_PASSWORD:o.str(),RABBITMQ_PORT:o.port({default:5672}),RABBITMQ_USER:o.str(),RABBITMQ_VHOST:o.str()}):(this.user=t.user,this.password=t.password,this.host=t.host,this.port=t.port,this.vhost=t.vhost),this.url=n.default.format("amqp://%s:%s@%s:%s/%s",this.user||process.env.RABBITMQ_USER,this.password||process.env.RABBITMQ_PASSWORD,this.host||process.env.RABBITMQ_HOST,this.port||process.env.RABBITMQ_PORT,this.vhost||process.env.RABBITMQ_VHOST)}var e=t.prototype;return e.canUseEnvConfig=function(t){return void 0!==t.useEnvironmentConfig},e.connect=function(t){try{return Promise.resolve(s.default.connect(t)).then(function(t){return Promise.resolve(t.createChannel())})}catch(t){return Promise.reject(t)}},e.send=function(t){try{return Promise.resolve(this.connect(this.url)).then(function(e){e.assertQueue(t.queue,{durable:!0}),e.sendToQueue(t.queue,Buffer.from(t.data)),console.log(" [x] Sent %s",t.data)})}catch(t){return Promise.reject(t)}},t}(),a=/*#__PURE__*/function(t){function e(){for(var e,o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))||this).queue="email_notification",e}return i(e,t),e.prototype.sendEmail=function(t){this.send({data:t,queue:this.queue})},e}(p),f=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return i(e,t),e}(p);return c=f,[a].forEach(function(t){Object.getOwnPropertyNames(t.prototype).forEach(function(e){Object.defineProperty(c.prototype,e,Object.getOwnPropertyDescriptor(t.prototype,e))})}),f});
