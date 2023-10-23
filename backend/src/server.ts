import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql';

const app = express();
app.use(cors());
dotenv.config();
const PORT : string | number = process.env.PORT || 5000;


const pool = mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'quizzin_DB',
})


app.get('/', (req, res) => {
    res.sendStatus(200);
})
app.listen(PORT, () => {
    console.log(`Server running on: ${PORT}`);
})