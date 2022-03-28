/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const port = process.env.PORT || 3000;
const host = environment.host || '0.0.0.0';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(port, host, () => {
    Logger.log(
      'Listening at http://'+ host + ':' + port + '/' + globalPrefix
    );
  });
}

bootstrap();
