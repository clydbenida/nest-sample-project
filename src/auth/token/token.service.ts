import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(
    private config: ConfigService,
    private jwtService: JwtService,
  ) { }

  generateToken(obj: any) {
    const token = this.jwtService.sign(obj, {
      secret: this.config.get('JWT_SECRET'),
      expiresIn: '1d'
    });

    return token;
  }
}
