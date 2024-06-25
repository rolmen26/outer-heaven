import { asClass, createContainer, InjectionMode } from "awilix";
import Logger from "../../shared/utils/logger";

const container = createContainer({
    injectionMode: InjectionMode.CLASSIC
}).createScope();

container.register({
    'logger': asClass(Logger).singleton()
});

export default container;