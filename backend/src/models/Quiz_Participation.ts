import { DataTypes } from "sequelize";
import { sequelizeConfig } from "../dbConfig";

export const Quiz_Participation = sequelizeConfig.define("Quiz_Participation", {
    userId : {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    quizId : {
      type : DataTypes.INTEGER,
      allowNull : false
    }
  });