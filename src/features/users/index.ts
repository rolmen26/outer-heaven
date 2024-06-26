import { asClass, AwilixContainer } from "awilix";
import { CreateUserHandler } from "./handlers/createUserHandler";
import { CreateUserHttpController } from "./controllers/createUserController";

export function registerUserModule(container: AwilixContainer): void {
  container.register({
    createUserHandler: asClass(CreateUserHandler).scoped(),
    createUserHttpController: asClass(CreateUserHttpController).singleton(),
  });
}
