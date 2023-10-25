import { DataTypes } from "sequelize";
import { sequelizeConfig } from "../dbConfig";

const Categorie = sequelizeConfig.define("Categorie", {
  categorieName: {
    type: DataTypes.STRING,
    allowNull: false
  }
});