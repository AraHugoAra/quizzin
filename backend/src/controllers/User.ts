import { User } from "../models/index";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";


const register = async (req: Request, res: Response) => {
  try {
    const { userName } = req.body;
    const user = await User.create({ userName: userName });
    const token = jwt.sign({ userName: userName }, "test",); // changer "test" par un truc en .env
    res.status(201).json({ token: token });
  } catch (error) {
    throw new Error(`Unable to create user, ${error}`);
  }
};

const login = async (req: Request, res: Response) => {
  try {    
    const { user } = req.body
    if (!user) {
      return res.status(401).json({ message: "Invalid username" });
    } else {
      return res.status(200).json( {message : 'You are logged', user : user})
    }
  } catch (error) {
    throw new Error(`Unable to login, ${error}`);
  }
};
const updateUser = async (req: Request, res: Response) => {};
const deleteUser = async (req: Request, res: Response) => {};
export { register, login, updateUser, deleteUser };