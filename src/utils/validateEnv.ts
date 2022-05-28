import { cleanEnv, str, port } from 'envalid';

function validateEnv(): void {
  cleanEnv(process.env, {
    RABBITMQ_HOST: str(),
    RABBITMQ_PASSWORD: str(),
    RABBITMQ_PORT: port({ default: 5672 }),
    RABBITMQ_USER: str(),
    RABBITMQ_VHOST: str(),
  });
}

export default validateEnv;
