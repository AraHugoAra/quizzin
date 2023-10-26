import { DataTypes } from "sequelize";
import { sequelizeConfig } from "../dbConfig";

export const Quiz = sequelizeConfig.define("Quiz", {
  questions: {
    type: DataTypes.JSON,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  quizType : {
    type : DataTypes.STRING,
    allowNull : false,
    validate : {
      isIn : [['daily', 'weekly', 'monthly']]
    }
  }
});
