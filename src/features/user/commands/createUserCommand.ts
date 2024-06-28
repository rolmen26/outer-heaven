import { CreateUserDto } from "../dtos/createUserDto";

export class CreateUserCommand {
  constructor(public readonly createUserDto: CreateUserDto) { }
}
