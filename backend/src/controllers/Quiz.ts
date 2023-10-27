import { Quiz } from "../models/index";
import { Request, Response, NextFunction } from "express";

const createQuiz = (req: Request, res: Response, next: NextFunction): void => {
  let quizObject = req.body;

  Quiz.create({
    questions: quizObject.questions,
    date: quizObject.date,
    quizType: quizObject.quizType,
  })
    .then(() => res.status(201).json({ message: "New Quiz" }))
    .catch((error: any) => res.status(400).json({ error }));
};

const getDailyQuiz = (req: Request, res: Response, next: NextFunction): void => {
  // let quizObject = req.body;

  const today = new Date();
  const dateToSearch = new Date(today.toISOString().split("T")[0]);

  Quiz.findOne({
    where: { date: dateToSearch, quizType: "daily" },
  })
    .then((result) => {
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404); //TODO: Create new daily quiz
      }
    })
    .catch((error: any) => res.status(500).json({ error }));
};

export default createQuiz;
