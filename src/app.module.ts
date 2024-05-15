import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { PlaceModule } from './place/place.module';
import { UserModule } from './user/user.module';
import { Place } from './place/entity/place.entity';
import { User } from './user/entities/user.entity';

import { Image } from './image/entities/image.entity';
import { ImageModule } from './image/image.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './schema.gql',
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      // type: 'postgres',
      // host: '172.187.177.240',
      // port: 5050,
      // password: 'zormor-demo',
      // username: 'zormor-demo',
      // entities: [Place, User],
      // database: 'zormor-demo',
      // synchronize: true,
      // logging: true,

      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '220495',
      username: 'postgres',
      entities: ['dist/**/*.entity{.ts,..js'],
      database: 'backend-db',
      synchronize: true,
      logging: true,
    }),
    PlaceModule,
    UserModule,
    ImageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}