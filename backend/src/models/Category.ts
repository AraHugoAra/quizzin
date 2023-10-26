import { DataTypes } from "sequelize";
import { sequelizeConfig } from "../dbConfig";

export const Category = sequelizeConfig.define("Category", {
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false
  }
});