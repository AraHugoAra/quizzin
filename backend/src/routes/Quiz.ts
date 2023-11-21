import express from "express";

export const quizRoutes = express.Router();

import { getQuiz } from "../controllers/Quiz";

quizRoutes.post("/:quizType", getQuiz);
