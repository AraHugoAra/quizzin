import { Quiz } from "../models/index";
import { Request, Response, NextFunction } from "express";
import axios from "axios";

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
        //  return console.log("pas de reponse");

        const url = "https://opentdb.com/api.php?amount=10&type=multiple";

        let quizObject = {
          questions: [],
          date: Date.now(),
          quizType: "daily",
        };

        axios
          .get(url)
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
            console.log(errAPI);
          });
      }
    })
    .catch((error: any) => res.status(500).json({ error }));
};
