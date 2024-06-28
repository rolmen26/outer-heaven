import { User } from "../../../models/user";
import { CreateUserCommand } from "../commands/createUserCommand";
import UserService from "../services/userService";

export class CreateUserHandler {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public async handle(command: CreateUserCommand): Promise<User> {
    const { name, email } = command.createUserDto;
    return await this.userService.createUser(name, email);
  }
}
