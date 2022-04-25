import { Body, ConflictException, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { GetUsersDto } from '../dtos/get-users.dto';
import { UserBodyDto } from '../dtos/user-body.dto';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {

    constructor(private userService: UserService) {}

    @Get()
    async get(@Query() params: GetUsersDto) {
        return await this.userService.getUsers(params);
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.userService.getUser(id);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.userService.removeUser(id);
    }
}
