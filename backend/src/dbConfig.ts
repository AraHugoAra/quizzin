import { Sequelize } from "sequelize";
import "dotenv/config";

const {DATABASE_NAME : database, USERNAME_DB : username, PASSWORD_DB : password, PORT_DB : port} = process.env

export const sequelizeConfig = new Sequelize(database!, username!, password!, {
  host: "localhost",
  dialect: "mysql",
  port: Number(port)
});

export const checkDbConnection = async () => {
  try {
    await sequelizeConfig.authenticate();
    console.log("Connection has been established successfully 🚀🚀");
  } catch (error) {
    throw new Error(`Unable to connect to the database: 😭😭😭😭: ${error}`);
  }
};

export const synchronizeDb = async () => {
  try {
    await sequelizeConfig.sync({force :true});
    // await sequelizeConfig.sync({alter : true});
    console.log("All models were synchronized successfully.🧡🧡🧡");
  } catch (error) {
    throw new Error(`Unable to synchronize the database : ${error}`);
  }
}