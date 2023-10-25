import { DataTypes } from "sequelize";
import { sequelizeConfig } from "../dbConfig";

export const Score = sequelizeConfig.define("Score", {
  weeklyScore: {
    type: DataTypes.NUMBER,
    allowNull: false
  }
});
