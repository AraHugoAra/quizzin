import { Sequelize } from "sequelize";
import "dotenv/config";

const database = process.env.DATABASE_NAME;
const username = process.env.USERNAME_DB;
const password = process.env.USERNAME_DB;
const port = Number(process.env.PORT_DB);

const sequelize = new Sequelize(database!, username!, password!, {
  host: "localhost",
  dialect: "mysql",
  port: port,
});

export const checkDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully 🚀🚀");
  } catch (error) {
    console.error("Unable to connect to the database: 😭😭😭😭", error);
  }
};
