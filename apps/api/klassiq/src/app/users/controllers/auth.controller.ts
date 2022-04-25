import { Body, ConflictException, Controller, Get, Post, Request } from '@nestjs/common';
import { ConnectDto } from '../dtos/connect.dto';
import { UserBodyDto } from '../dtos/user-body.dto';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Controller('auth')
export class AuthController {

    constructor(private userService: UserService, private authService: AuthService) {}

    
    @Post('/register')
    async add(@Body() body: UserBodyDto) {
        try {
            return await this.userService.addUser(body);
        } catch(e: any) {
            throw new ConflictException('User already exists');
        }
    }

    @Get('/login')
    async login(@Body() body: ConnectDto) {
        return await this.authService.login(body);
    }

    @Get('/logout')
    async logout(@Request() req) {
        return await this.authService.logout(req);
    }
}
