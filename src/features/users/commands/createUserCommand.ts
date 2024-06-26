import { CreateUserDto } from "../dtos/createUserDto";

export class CreateUserCommand {
  public name: string;
  public email: string;

  constructor(dto: CreateUserDto) {
    this.name = dto.name;
    this.email = dto.email;
  }
}
