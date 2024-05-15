import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   // Log the resolved path for schema generation
   const schemaPath = path.join(process.cwd(), 'src/schema.gql');
   Logger.log(`AutoSchemaFile path: ${schemaPath}`);
  await app.listen(3000);
}
bootstrap();
