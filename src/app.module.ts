import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { PlaceModule } from './place/place.module';

import { DataSource } from 'typeorm';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
      context: ({ req }) => ({ req }),
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        // host: configService.get('DB_HOST'),
        // port: +configService.get('DB_PORT'),
        // username: configService.get('DB_USERNAME'),
        // password: configService.get('DB_PASSWORD'),
        // database: configService.get('DB_DATABASE'),
        // autoLoadEntities: true,
        synchronize: true,
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
      }),
    }),
    PlaceModule,
    UserModule,
    // UserModule,
    // ImageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
    console.log(dataSource);
  }
  configure() {
    console.log('Started ..... ');
  }
}