import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import db from './database';
import { Logger } from '@nestjs/common';
import * as graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.use(graphqlUploadExpress({ maxFileSize: 10000, maxFiles: 3 }));
  const port = process.env.PORT || 3000;

  try {
    await db.connect();
    console.log('Connected to PostgreSQL database');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    process.exit(1);
  }

  await app.listen(port);
  Logger.log(`Application is running on: ${process.env.PORT}`);
}
bootstrap();
