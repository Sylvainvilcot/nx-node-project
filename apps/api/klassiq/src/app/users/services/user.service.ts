import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GetUsersDto } from '../dtos/get-users.dto';
import { UserBodyDto } from '../dtos/user-body.dto';
import { User } from '../schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { environment } from '../../../environments/environment';


@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private model: Model<User>) {}


    async getUsers(dto: GetUsersDto) {

        let offset = +dto.offset || 0;
        let limit = +dto.limit || 50;
        if(offset < 0) {
            offset = 0;
        }

        if(limit > 100 || limit < 0) {
            limit = 50;
        }


        return await this.model.find().skip(+dto.offset).limit(+dto.limit);
    }

    async getUser(id: string) {
        const item = await this.model.findById(id);
        
        if(!item) {
            throw new NotFoundException();
        }

        return item;
    }
    
    async get(login: string) {
        const item = await this.model.findOne({login});
        
        if(!item) {
            throw new NotFoundException();
        }
    
        return item;
    
    }

    async removeUser(id: string) {
        const item = await this.model.findById(id);
        
        if(!item) {
            throw new NotFoundException();
        }

        item.remove();

        return item;
    }

    async addUser(dto: UserBodyDto) {

        const hash = await bcrypt.hash(dto.password, +environment.hash.saltorround);

        const data = {...dto, password: hash};

        return await this.model.create(data);        
    } 
}
