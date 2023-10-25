import { DataTypes } from "sequelize";
import { sequelizeConfig } from "../dbConfig";

export const Categorie = sequelizeConfig.define("Categorie", {
  categorieName: {
    type: DataTypes.STRING,
    allowNull: false
  }
});