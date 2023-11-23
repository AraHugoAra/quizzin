import { DataTypes } from "sequelize";
import { sequelizeConfig } from "../dbConfig";

export const Quiz_Answer = sequelizeConfig.define("Quiz_Answer", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quizId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isCorrect: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
