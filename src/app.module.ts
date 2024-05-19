import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { PlaceModule } from './place/place.module';
import { UserModule } from './user/user.module';
import { ImageModule } from './image/image.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      driver: ApolloDriver,
      context: ({ req }) => ({ req }),
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: 'postgres://zormor:UJPs4DiyvyFRnhrXCh64HjN6zRMncebC@dpg-cp3i5o8l6cac73f63be0-a.oregon-postgres.render.com/zormor_db',
        // host: configService.get<string>('POSTGRES_HOST'),
        // port: configService.get<number>('POSTGRES_PORT'),
        // username: configService.get<string>('POSTGRES_USER'),
        // password: configService.get<string>('POSTGRES_PASSWORD'),
        // database: configService.get<string>('POSTGRES_DATABASE'),
        autoLoadEntities: true,
        synchronize: true,
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
      }),
    }),
    PlaceModule,
    UserModule,
    ImageModule,
    // AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private readonly dataSource: DataSource) {
    console.log(this.dataSource);
  }

  configure() {
    console.log('AppModule configured');
  }
}
