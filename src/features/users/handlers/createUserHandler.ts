import { User } from "../../../models/user";
import { CreateUserCommand } from "../commands/createUserCommand";
import sequelize from "../../../infrastructure/database/db-connection";

export class CreateUserHandler {
  async handle(command: CreateUserCommand): Promise<User> {
    const transaction = await sequelize.transaction();

    try {
      const user = User.instanceNewUser(command.name, command.email);

      await user.save({ transaction });

      await transaction.commit();

      return user;
    } catch (error) {
      await transaction.rollback();
      throw error as Error;
    }
  }
}
