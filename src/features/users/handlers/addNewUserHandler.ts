import { User } from "../../../models/user";
import { CreateUserCommand } from "../commands/addNewUserCommand";
import sequelize from "../../../infrastructure/database/db-connection";

export class CreateUserHandler {
  async handle(command: CreateUserCommand): Promise<User> {
    try {
      const transaction = await sequelize.transaction();

      const user = await User.instanceNewUser(command.name, command.email);

      await user.save({ transaction });

      await transaction.commit();

      return user;

    } catch (error) {
      throw error as Error;
    }
  }
}
