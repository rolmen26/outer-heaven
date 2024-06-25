import { asClass, createContainer, InjectionMode } from "awilix";
import Logger from "../../shared/utils/logger";
import { registerUserModule } from "../../features/users";

const container = createContainer({
    injectionMode: InjectionMode.CLASSIC
}).createScope();

container.register({
    'logger': asClass(Logger).singleton()
});

registerUserModule(container);

export default container;