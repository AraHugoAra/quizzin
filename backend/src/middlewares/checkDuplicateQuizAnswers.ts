import { Quiz_Answer } from "../models/index";
import { Request, Response, NextFunction } from "express";

//middleware to avoid duplicate answers from the same user on a quiz
export const checkDuplicateQuizAnswers = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { userId, quizId } = req.body;
  console.log(req.body);

  Quiz_Answer.findOne({
    where: {
      userId: userId,
      quizId: quizId,
    },
  })
    .then((existingAnswer) => {
      if (existingAnswer) {
        return res
          .status(409)
          .json({ message: "Answer for this user and quiz already exists" });
      }

      next();
    })
    .catch((error) => {
      return res.status(500).json({ error: "Internal Server Error" });
    });
};
