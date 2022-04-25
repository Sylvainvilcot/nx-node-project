import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { environment } from '../../environments/environment';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: environment.jwt.secret,
      signOptions: { expiresIn: '350s' },
    }),
  ],
  providers: [UserService, AuthService],
  controllers: [UserController, AuthController],
})
export class UserModule {}
