import { asClass, AwilixContainer } from "awilix";
import { CreateUserHandler } from "./handlers";
import { CreateUserHttpController } from './controllers'
import UserService from "./services/userService";

export function registerUserModule(container: AwilixContainer): void {
  container.register({
    createUserHandler: asClass(CreateUserHandler).scoped(),
    createUserHttpController: asClass(CreateUserHttpController).singleton(),
    userService: asClass(UserService).singleton(),
  });
}
