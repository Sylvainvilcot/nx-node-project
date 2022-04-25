export class UserBodyDto {
    login: string;
    password: string;
    role: 'user' | 'admin';
}