"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDbConnection = void 0;
const sequelize_1 = require("sequelize");
require("dotenv/config");
const database = process.env.DATABASE;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const port = Number(process.env.PORT);
const sequelize = new sequelize_1.Sequelize(database, username, password, {
    host: "localhost",
    dialect: "mysql",
    port: port
});
const checkDbConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        console.log("Connection has been established successfully 🚀🚀");
    }
    catch (error) {
        console.error("Unable to connect to the database: 😭😭😭😭", error);
    }
});
exports.checkDbConnection = checkDbConnection;
