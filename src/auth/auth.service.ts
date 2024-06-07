import { compareSync } from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { PasswordService } from './password/password.service';
import { TokenService } from './token/token.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private passwordService: PasswordService,
    private tokenService: TokenService,
  ) { }

  async signIn(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    const match = compareSync(password, user?.password ?? '');
    if (!match && !user) {
      throw new UnauthorizedException();
    }

    // Remove the password from the user payload
    const { password: _, ...payload } = user;
    const token = this.tokenService.generateToken({ ...payload });

    return {
      accessToken: token,
    };
  }

  async register(newUser: CreateUserDto) {
    const foundUser = await this.userService.findOne(newUser.username);

    if (foundUser) {
      return 'Username is already taken!';
    }

    // Hash password
    Object.assign(newUser, {
      password: this.passwordService.encryptPassword(newUser.password),
    });

    this.userService.create(newUser);
  }
}
