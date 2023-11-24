import jwt, { JwtPayload } from 'jsonwebtoken';
import { User } from '../../models/index';
import { Request, Response, NextFunction } from 'express';

const authenticate = async (req : Request, res : Response, next : NextFunction) => {
    type jwtToken = {
        userName : string
    }
    try {
        const {token} = req.body
        if(!token) return res.status(401).send({message : 'No token provided'})
        const decodedToken = jwt.verify(token, 'test') as jwtToken;
        const user = await User.findOne({ where: { userName: decodedToken?.userName } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        } else {
            req.body.user = user;
            next();
        }
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

export { authenticate };