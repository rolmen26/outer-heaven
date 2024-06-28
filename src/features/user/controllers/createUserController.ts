import { Request, Response } from "express";
import { CreateUserHandler } from "../handlers/createUserHandler";
import { CreateUserCommand } from "../commands/createUserCommand";
import { CreateUserDto } from "../dtos/createUserDto";
import Logger from "../../../shared/utils/logger";

export class CreateUserHttpController {
  private handler: CreateUserHandler;

  private logger: Logger;

  constructor(createUserHandler: CreateUserHandler, logger: Logger) {
    this.handler = createUserHandler;
    this.logger = logger;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const createUserDto: CreateUserDto = {
        name: req.body.name,
        email: req.body.email,
      };
      const command = new CreateUserCommand(createUserDto);
      const user = await this.handler.handle(command);
      return res.status(201).json({
        'message': 'User created successfully',
      });
    } catch (error: any) {
      this.logger.error(error);
      return res.status(500).json({
        'error': error.message,
      });
    }
  }
}

