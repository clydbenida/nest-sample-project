import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { PasswordService } from './password/password.service';
import { TokenModule } from './token/token.module';
import { TokenService } from './token/token.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User]), TokenModule, JwtModule],
  providers: [AuthService, PasswordService, UsersService, TokenService],
})
export class AuthModule { }
