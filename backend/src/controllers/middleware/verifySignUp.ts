
import { User } from '../../models/index';
import {Request, Response, NextFunction } from "express";

export const verifySignUp =  async (req: Request, res: Response, next : NextFunction): Promise<void> =>  {
    try {
       const username = await User.findOne({where : { username : req.body.username}})
        if(username) {
            res
            .status(400)
            .send({message : 'Username is already exisiting !'});
        }
        next();
    } catch (error) {
        throw new Error('Unable to verify if user is existing or not')
    }
};