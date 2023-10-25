import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("sqlite::memory:");

const Categorie = sequelize.define("Categorie", {
  // Model attributes are defined here
  categorieName: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// `sequelize.define` also returns the model
console.log(Categorie === sequelize.models.Categorie); // true
