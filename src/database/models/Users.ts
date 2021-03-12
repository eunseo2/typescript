import {
  Sequelize,
  Model,
  ModelDefined,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  Association,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  Optional,
} from 'sequelize';

import sequelize from '../db';

interface UserAttributes {
  id: number;
  username: string;
  email: string;
}

export class Users extends Model<UserAttributes> {
  public id!: number;
  public username!: string;
  public email!: string;
  public createAt!: Date;
  public updateAt!: Date;

  public static associations: {};
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    username: {
      type: DataTypes.STRING(255),
      unique: true,
    },
    email: {
      type: DataTypes.INTEGER,
      unique: true,
    },
  },
  {
    modelName: 'Users',
    tableName: 'Users',
    sequelize,
    freezeTableName: true,
    timestamps: true,
    updatedAt: 'updateTimestamp',
  }
);
