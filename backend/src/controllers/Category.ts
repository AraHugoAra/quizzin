import axios from 'axios';
import { Request, Response, NextFunction } from "express";

const getAllCategory = async (req : Request, res : Response) => {
    const config = {
        method : 'get',
        url : 'https://opentdb.com/api_category.php'
    }
    try {
        const {data} = await axios.request(config);
        console.log(data);
        res.status(200).json(data?.trivia_categories)
    } catch (error) {
        throw new Error(`Cannot get categories : ${error}`)
    }
};

export { getAllCategory };