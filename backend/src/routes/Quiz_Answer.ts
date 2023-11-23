import express from "express";

export const quizAnswerRoutes = express.Router();

import {
  createQuizAnswer,
  getQuizAnswersByUserAndQuizType,
} from "../controllers/Quiz_Answer";
import { checkDuplicateQuizAnswers } from "../middlewares/checkDuplicateQuizAnswers";

quizAnswerRoutes.post("/", checkDuplicateQuizAnswers, createQuizAnswer);
quizAnswerRoutes.get("/:quizType/:userId", getQuizAnswersByUserAndQuizType);
