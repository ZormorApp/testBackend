import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceModule } from './place/place.module';
import { UserModule } from './user/user.module';
import { ImageModule } from './image/image.module';
import { User } from './user/entities/user.entity';
import { Place } from './place/entity/place.entity';
import { Image } from './image/entities/image.entity';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
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
      port: 5050,
      password: 'zormor',
      username: 'zormor',
      // entities: [__dirname + '/../**/*.entity.{js,ts}'],
      entities: [User, Place, Image],
      database: 'zormor',
      synchronize: true,
      logging: true,
      autoLoadEntities: true
    }),
    PlaceModule,
    UserModule,
    ImageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
