import { Router } from "express";
import { User } from "../models/User";

const signInRoute = Router();

signInRoute.post("/signin", async () => {
  // const newUser = await User.create({ userName: "Jane" });
});

export default signInRoute;
