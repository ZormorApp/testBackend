import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import db from './database';
import { Logger } from '@nestjs/common';
// import * as graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.use(graphqlUploadExpress({ maxFileSize: 10000, maxFiles: 3 }));
  const port = 3000;
  await app.listen(port);
  Logger.log(`Application is running on: ${port}`);
}
bootstrap();
