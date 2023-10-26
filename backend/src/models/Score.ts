import { DataTypes } from "sequelize";
import { sequelizeConfig } from "../dbConfig";

export const Score = sequelizeConfig.define("Score", {
  userId : {
    type : DataTypes.INTEGER,
    allowNull : false
  },
  weeklyScore: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});
