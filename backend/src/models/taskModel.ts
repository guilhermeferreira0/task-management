import {
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  DataTypes,
} from 'sequelize';
import { sequelize } from '../config/db';
import { ProgressTaskProps } from '../types/taskType';

export class Task extends Model<
  InferAttributes<Task>,
  InferCreationAttributes<Task>
> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare description: string;
  declare progress: ProgressTaskProps;
  declare user_id: number;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    progress: {
      type: DataTypes.ENUM,
      values: [
        ProgressTaskProps.pending,
        ProgressTaskProps.inProgress,
        ProgressTaskProps.delayed,
        ProgressTaskProps.completed,
      ],
      defaultValue: ProgressTaskProps.pending,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  { sequelize, timestamps: true, modelName: 'task' },
);