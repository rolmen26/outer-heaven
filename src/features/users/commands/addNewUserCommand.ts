import { UserDto } from "../dtos/userDto";

export class CreateUserCommand {
  public name: string;
  public email: string;

  constructor(dto: UserDto) {
    this.name = dto.name;
    this.email = dto.email;
  }
}
