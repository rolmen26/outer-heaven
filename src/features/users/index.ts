import { asClass, AwilixContainer } from "awilix";
import { CreateUserHandler } from "./handlers/addNewUserHandler";
import { UserHttpController } from "./controllers/addNewUserController";

export function registerUserModule(container: AwilixContainer): void {
  container.register({
    createUserHandler: asClass(CreateUserHandler).singleton(),
    userHttpController: asClass(UserHttpController).singleton(),
  });
}
