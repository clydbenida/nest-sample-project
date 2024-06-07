import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { PasswordModule } from 'src/auth/password/password.module';
import { TokenModule } from 'src/auth/token/token.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    AuthModule,
    PasswordModule,
    TokenModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, AuthService],
  exports: [TypeOrmModule],
})
export class UsersModule { }
