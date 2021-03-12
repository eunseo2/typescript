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
import { Users } from './Users';

interface PostAttributes {
  id: number;
  title: string;
  text: string;
}

export class Posts extends Model<PostAttributes> {
  public id!: number;
  public title!: string;
  public text!: string;
  public createAt!: Date;
  public updateAt!: Date;
  public static associations: {
    userHasManyScores: Association<Posts>;
  };
}

Posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING(100),
    },
    text: {
      type: DataTypes.TEXT,
    },
  },
  {
    modelName: 'Posts',
    tableName: 'Posts',
    sequelize,
    freezeTableName: true,
    timestamps: true,
    updatedAt: 'updateTimestamp',
  }
);

Posts.belongsTo(Users, {
  foreignKey: 'fk_user_id',
  as: 'user',
  onDelete: 'CASCADE',
  onUpdate: 'RESTRICT',
});
