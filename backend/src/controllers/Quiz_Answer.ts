import { log } from "console";
import { Quiz_Answer } from "../models/index";
import { Request, Response, NextFunction } from "express";

// Create a Quiz Answer
export const createQuizAnswer = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  Quiz_Answer.create({
    ...req.body,
  })
    .then(() => res.status(201).json({ message: "ok" }))
    .catch((error: any) => res.status(500).json({ error }));
};
