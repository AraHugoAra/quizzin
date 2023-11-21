import { User } from "../models/index";
import { Request, Response, NextFunction } from "express";

const register = async (req: Request, res: Response) => {
  try {
    const user = await User.create({ userName: req.body.userName });
    console.log(user);
    res.status(201).json({message : 'top ça marche'});
    return
  } catch (error) {
    throw new Error(`Unable to create user, ${error}`);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ where: { userName: req.body.userName } });
    console.log(user);
    res.status(200).json({message : 'bien loggé '});
  } catch (error) {
    throw new Error(`Unable to login, ${error}`);
  }
};

const updateUser = async (req: Request, res: Response) => {};

const deleteUser = async (req: Request, res: Response) => {};

export { register, login, updateUser, deleteUser };
