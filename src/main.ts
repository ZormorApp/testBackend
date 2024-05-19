import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.use(graphqlUploadExpress({ maxFileSize: 10000, maxFiles: 3 }));
  const port = process.env.DB_PORT || 3000;

  await app.listen(port);
  Logger.log(`Application is running on: ${process.env.PORT}`);
}
bootstrap();
