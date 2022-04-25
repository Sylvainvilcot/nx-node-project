import { User } from "../schemas/user.schema";

export class ResUsersDto {
    nodes: User[];
    total: number;
}