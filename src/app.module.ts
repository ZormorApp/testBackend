import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceModule } from './place/place.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { Place } from './place/entity/place.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => {
          return {
            type: 'postgres',
            host: configService.get<string>('DB_HOST'),
            port: configService.get<number>('DB_PORT'),
            username: configService.get<string>('DB_USER'),
            password: configService.get<string>('DB_PASS'),
            database: configService.get<string>('DB_NAME'),
            entities: [User, Place],
            synchronize: true,
            logging: true,
            autoLoadEntities: true,
            retryAttempts: 3,
            retryDelay: 1000,
            extra: {
              ssl: true
            }
          };
        },
        inject: [ConfigService]
      }),

    PlaceModule,
    UserModule,
    // ImageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
