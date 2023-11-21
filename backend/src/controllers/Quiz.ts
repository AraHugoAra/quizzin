import { Quiz } from "../models/index";
import { Request, Response, NextFunction } from "express";
import axios from "axios";

const URL_API =
  "https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple";

function fetchAndCreateQuiz(
  quizType: string,
  dateToSearch: Date,
  res: Response
): void {
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

export const getQuiz = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { quizType } = req.params;
  const today = new Date();
  let dateToSearch: Date;

  if (quizType === "daily") {
    dateToSearch = new Date(today.toISOString().split("T")[0]);
  } else if (quizType === "weekly") {
    const dayOfWeek = today.getDay();
    const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    const firstMondayOfTheWeek = new Date(today.setDate(diff));
    dateToSearch = new Date(firstMondayOfTheWeek.toISOString().split("T")[0]);
  } else if (quizType === "monthly") {
    const date = new Date(today.getFullYear(), today.getMonth(), 1);
    const offset = today.getTimezoneOffset() * 60 * 1000;
    dateToSearch = new Date(date.getTime() - offset);
  } else {
    res.status(400).json({ error: "Invalid quiz type" });
    return;
  }

  Quiz.findOne({
    where: { date: dateToSearch, quizType: quizType },
  })
    .then((result) => {
      if (result !== null) {
        res.status(201).json(result);
      } else {
        fetchAndCreateQuiz(quizType, dateToSearch, res);
      }
    })
    .catch((error: any) => res.status(500).json({ error }));
};
