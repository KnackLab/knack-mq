# knack-mq
 SDk built on top of rabbitmq to send email or data accross services

# Usage

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

````

