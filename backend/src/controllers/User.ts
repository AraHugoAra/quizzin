import { User } from "../models/index";
import { Request, Response, NextFunction } from "express";

const register = async (req: Request, res: Response) => {
  try {
    const user = await User.create({ username: req.body.username });
    console.log(user);
  } catch (error) {
    throw new Error(`Unable to create user, ${error}`);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    console.log(user);
  } catch (error) {
    throw new Error(`Unable to login, ${error}`);
  }
};

const updateUser = async (req: Request, res: Response) => {};

const deleteUser = async (req: Request, res: Response) => {};

export { register, login, updateUser, deleteUser };
