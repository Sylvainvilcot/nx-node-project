import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ConnectDto } from '../dtos/connect.dto';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtTokenService: JwtService
  ) {}

  async login(dto: ConnectDto) {
    try {
      const user = await this.userService.get(dto.login);

      const isMatch = await bcrypt.compare(dto.password, user.password);

      if (!isMatch) {
        throw new ForbiddenException('Invalid credentials');
      }
      const payload = { login: user.login, sub: user.id };

      return {
        access_token: this.jwtTokenService.sign(payload),
      };
    } catch (e: any) {
      if (e instanceof ForbiddenException) {
        throw e;
      }
      throw new NotFoundException('User not found');
    }
  }

  async logout(req: any) {
    const token = req.headers.authorization;
    let decoded = this.jwtTokenService.decode(token.replace('Bearer ', ''));
  }
}
