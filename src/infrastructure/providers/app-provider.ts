import { createContainer, InjectionMode } from "awilix";

const container = createContainer({
    injectionMode: InjectionMode.CLASSIC
}).createScope();

container.register({});

export default container;