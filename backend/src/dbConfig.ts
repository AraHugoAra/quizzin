const { Sequelize } = require("sequelize");

const database = "quizzIn";
const username = "root";
const password = "root";
// const port = "8889";

console.log("hello");
const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "mysql",
  port: 8889
});

export const checkDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
