import { Quiz } from "../models/index";
import { Request, Response, NextFunction } from "express";
import axios from "axios";

const URL_API = "https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple";

function getQuiz(quizType: string, dateToSearch: Date, res: Response): void {
  let quizObject = {
    questions: [],
    date: dateToSearch,
    quizType: quizType,
  };

  axios
    .get(URL_API)
    .then((resAPI) => {
      quizObject.questions = resAPI.data.results;

      Quiz.create({
        questions: quizObject.questions,
        date: quizObject.date,
        quizType: quizObject.quizType,
      })
        .then((result) => res.status(201).json(result))
        .catch((error: any) => res.status(400).json({ error }));
    })
    .catch((errAPI) => {
      res.status(500).json({ errAPI });
    });
}

export const getDailyQuiz = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const today = new Date();
  const dateToSearch = new Date(today.toISOString().split("T")[0]);

  Quiz.findOne({
    where: { date: dateToSearch, quizType: "daily" },
  })
    .then((result) => {
      if (result !== null) {
        res.status(201).json(result);
      } else {
        getQuiz("daily", dateToSearch, res);
      }
    })
    .catch((error: any) => res.status(500).json({ error }));
};

export const getWeeklyQuiz = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
  const firstMondayOfTheWeek = new Date(today.setDate(diff));
  const dateToSearch = new Date(
    firstMondayOfTheWeek.toISOString().split("T")[0]
  );

  Quiz.findOne({
    where: { date: today, quizType: "weekly" },
  })
    .then((result) => {
      if (result !== null) {
        res.status(201).json(result);
      } else {
        getQuiz("weekly", dateToSearch, res);
      }
    })
    .catch((error: any) => res.status(500).json({ error }));
};

export const getMonthlyQuiz = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const today = new Date();
  const dateToSearch = new Date(today.getFullYear(), today.getMonth(), 1);
  const offset = today.getTimezoneOffset() * 60 * 1000;
  const localDateToSearch = new Date(dateToSearch.getTime() - offset);

  Quiz.findOne({
    where: { date: localDateToSearch, quizType: "monthly" },
  })
    .then((result) => {
      if (result !== null) {
        res.status(201).json(result);
      } else {
        getQuiz("monthly", localDateToSearch, res);
      }
    })
    .catch((error: any) => res.status(500).json({ error }));
};
