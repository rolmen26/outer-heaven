import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Unique,
  AutoIncrement,
  Default,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";

@Table({
  tableName: "users",
})
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Unique
  @Default(uuidv4)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  uuid!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    validate: {
      isEmail: true,
    },
  })
  email!: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  })
  isActive!: boolean;

  static instanceNewUser(name: string, email: string) {
    return this.build({
      name,
      email,
    });
  }
}

export default User;
