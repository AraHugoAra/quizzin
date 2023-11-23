import { Quiz_Answer, User, Quiz } from "../models/index";
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

//Get all Quiz Answer by User and quizType
export const getQuizAnswersByUserAndQuizType = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { userId, quizType } = req.params;

  User.findByPk(userId)
    .then((user: any) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      Quiz_Answer.findAll({
        where: { userId },
        include: [
          {
            model: Quiz,
            where: { quizType: quizType },
            attributes: ["date", "quizType", "Id"],
          },
        ],
      })
        .then((userQuizAnswers: any) => {
          res.status(200).json({ userQuizAnswers });
        })
        .catch((error: any) => {
          res.status(500).json({
            error: "Error retrieving user's quiz_answer",
          });
        });
    })
    .catch((error: any) => {
      res.status(500).json({
        error: "Error retrieving user's quiz_answer",
      });
    });
};
