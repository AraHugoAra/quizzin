import { DataTypes } from "sequelize";
import { sequelizeConfig } from "../dbConfig";

export const Quiz = sequelizeConfig.define("Quiz", {
  questions: {
    type: DataTypes.JSON, //TODO: replace JSON type by array
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  quizType: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [["daily", "weekly", "monthly"]],
    },
  },
});
