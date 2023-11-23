import { Quiz_Participation } from "../models/index";
import { Request, Response, NextFunction } from "express";

//middleware to avoid multiple Quiz Participation
export const checkDuplicateQuizParticipation = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { userId, quizId } = req.body;
  console.log(req.body);

  Quiz_Participation.findOne({
    where: {
      userId: userId,
      quizId: quizId,
    },
  })
    .then((existingParticipation) => {
      if (existingParticipation) {
        return res
          .status(409)
          .json({ message: "The user has already taken this quiz" });
      }

      next();
    })
    .catch((error) => {
      return res.status(500).json({ error: "Internal Server Error" });
    });
};
