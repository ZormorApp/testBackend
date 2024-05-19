// import { Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
// import { AuthService } from './auth.service';
// import { UserService } from '../user/user.service';
// import { JwtStrategy } from './jwt.strategy';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { AuthResolver } from './auth.resolver';
// import { UserModule } from 'src/user/user.module';

// @Module({
//   imports: [
//     PassportModule,
//     JwtModule.registerAsync({
//       imports: [ConfigModule],
//       useFactory: async (configService: ConfigService) => ({
//         secret: configService.get<string>('JWT_SECRET'),
//         signOptions: { expiresIn: '60m' },
//       }),
//       inject: [ConfigService],
//     }),
//     UserModule
//   ],
//   providers: [AuthService, UserService, JwtStrategy, AuthResolver],
//   exports: [AuthService],
// })
// export class AuthModule {}
