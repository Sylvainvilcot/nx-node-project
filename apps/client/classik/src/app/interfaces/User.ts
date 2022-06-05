export class User {
    id!: string;
    login!: string;
    password!: string;
    role!: 'user' | 'admin';
    token!: string;
    exp!:number;
}