import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto/create-user.dto';
import { AuthService } from 'src/auth/auth.service';

@Controller('user')
export class UsersController {
  constructor(private authService: AuthService) { }

  @Post('sign-in')
  async signIn(@Body() userCredentials: LoginUserDto) {
    return this.authService.signIn(userCredentials.username, userCredentials.password);
  }

  @Post('register')
  async register(@Body() newUser: CreateUserDto) {
    return this.authService.register(newUser);
  }
}
