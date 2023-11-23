import { Quiz_Participation } from "../models/index";
import { Request, Response, NextFunction } from "express";

// Create a Quiz Participation
export const createQuizParticipation = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  Quiz_Participation.create({
    ...req.body,
  })
    .then(() =>
      res.status(201).json({ message: "Quiz participation recorded!" })
    )
    .catch((error: any) => res.status(500).json({ error }));
};
