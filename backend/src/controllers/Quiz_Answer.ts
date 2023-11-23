import { Quiz_Answer, User, Quiz } from "../models/index";
import { Request, Response, NextFunction } from "express";
import { Op } from "sequelize";

// Create a Quiz Answer
export const createQuizAnswer = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  Quiz_Answer.create({
    ...req.body,
  })
    .then(() => res.status(201).json({ message: "Quiz answers recorded!" }))
    .catch((error: any) => res.status(500).json({ error }));
};

// Get all Quiz Answer by User and quizType
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

// Get all Quiz Answers by User for the current week
export const getQuizAnswersByUserForCurrentWeek = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { userId } = req.params;

  const today = new Date();
  const offset = today.getTimezoneOffset() * 60 * 1000;

  const currentDay = today.getDay();
  const diffToMonday =
    today.getDate() - currentDay + (currentDay === 0 ? -6 : 1);
  const mondayDate = new Date(today.setDate(diffToMonday));
  mondayDate.setHours(0, 0, 0, 0 - offset);

  const sundayDate = new Date(mondayDate);
  sundayDate.setDate(mondayDate.getDate() + 6);
  sundayDate.setHours(23, 59, 59, 999 - offset);

  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      Quiz.findAll({
        where: {
          quizType: "daily",
          date: {
            [Op.between]: [mondayDate, sundayDate],
          },
        },
        attributes: ["Id"],
      })
        .then((quizzes: any) => {
          const quizIds = quizzes.map((quiz: any) => quiz.dataValues.Id);

          // Retrieve quiz answers for the found quizIds
          Quiz_Answer.findAll({
            where: {
              userId,
              quizId: {
                [Op.in]: quizIds,
              },
            },
            include: [
              {
                model: Quiz,
                where: { quizType: "daily" },
                attributes: ["date", "quizType", "Id"],
              },
            ],
          })
            .then((userWeeklyQuizAnswers: any) => {
              res.status(200).json({ userWeeklyQuizAnswers });
            })
            .catch((error: any) => {
              res.status(500).json({
                error: "Error retrieving user's weekly quiz answers",
              });
            });
        })
        .catch((error: any) => {
          res.status(500).json({
            error: "Error retrieving quizzes",
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        error: "Error retrieving user's quiz_answer for the week",
      });
    });
};
