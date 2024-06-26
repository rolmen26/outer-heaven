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
  underscored: true,
  timestamps: false,
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
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  createdAt!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  updatedAt!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  deletedAt!: Date;

  static instanceNewUser(name: string, email: string): User {
    return this.build({
      name,
      email,
    });
  }
}

export default User;
