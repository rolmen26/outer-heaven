import { Request, Response } from "express";
import { CreateUserHandler } from "../handlers/addNewUserHandler";
import { CreateUserCommand } from "../commands/addNewUserCommand";
import { UserDto } from "../dtos/userDto";
import Logger from "../../../shared/utils/logger";

export class UserHttpController {
  private handler: CreateUserHandler;

  private logger: Logger;

  constructor(createUserHandler: CreateUserHandler, logger: Logger) {
    this.handler = createUserHandler;
    this.logger = logger;
  }

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const dto: UserDto = req.body;
      const command = new CreateUserCommand(dto);

      await this.handler.handle(command);

      res.status(201).send("User created successfully");
    } catch (error: any) {
      this.logger.error(error.message);
      res.status(500).json({ error: error.message });
    }
  }
}
