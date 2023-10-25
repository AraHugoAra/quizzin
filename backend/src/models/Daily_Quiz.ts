import { DataTypes } from "sequelize"; 
import { sequelizeConfig } from "../dbConfig";

const Dayly_Quiz = sequelizeConfig.define("Dayly_Quiz", {
    questions : {
        type : DataTypes.JSON,
        allowNull : false,
    },
    quizId : {
        type : DataTypes.NUMBER,
        allowNull : false
    },
    date : {
        type : DataTypes.DATE,
        allowNull : false
    }
})