# knack-mq
 SDk built on top of rabbitmq to send email or data accross services

# Usage

Without Configuration
````
Set the following in your environment variables
RABBITMQ_VHOST=
RABBITMQ_PASSWORD=
RABBITMQ_USER=
RABBITMQ_URI=
RABBITMQ_HOST=
RABBITMQ_PORT=
````

With Configuration
````
import KnackMQ from 'knack-mq';

const mq = new KnackMQ({
  host: '172.x.x.x',
  password: 'servicePassword',
  port: '5672',
  user: 'serviceUser',
  vhost: '/',
});

const mail_data = {
  templateName: 'program_invite',
  receiver: 'tobiayokunnu@gmail.com',
  program_name: 'Test SDK',
  companyName: 'Knack',
  description: 'Improving developer experience',
  frontend_url: `knacklab.co`,
};

mq.sendEmail(mail_data);
````

