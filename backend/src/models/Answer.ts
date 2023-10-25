import { DataTypes } from "sequelize";
import { sequelizeConfig } from "../dbConfig";

export const Answer = sequelizeConfig.define("Answer", {
  difficlty: {
    type: DataTypes.STRING,
    allowNull: false
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isCorrect: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  duration: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
});
