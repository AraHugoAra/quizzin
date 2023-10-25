import { DataTypes } from "sequelize";
import { sequelizeConfig } from "../dbConfig";

export const User = sequelizeConfig.define("User", {
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
