import { DataTypes } from "sequelize";
import { sequelizeConfig } from "../dbConfig";

export const Answer = sequelizeConfig.define("Answer", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quizId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  difficulty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isCorrect: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE, //TODO : check if we need the date or just the day?
    allowNull: false,
  },
});
