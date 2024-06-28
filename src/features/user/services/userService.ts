import sequelize from "../../../infrastructure/database/db-connection";
import User from "../../../models/user";

class UserService {
    public async createUser(name: string, email: string): Promise<User> {
        const transaction = await sequelize.transaction();
        try {
            const user = User.instanceNewUser(name, email);
            await user.save({ transaction });
            await transaction.commit();
            return user;
        } catch (error: any) {
            await transaction.rollback();
            throw error;
        }
    }

    public async getUserById(id: number): Promise<User | null> {
        return await User.findByPk(id);
    }
}

export default UserService;
