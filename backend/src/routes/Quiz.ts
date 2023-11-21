import express from "express";

export const quizRoutes = express.Router();

import { getDailyQuiz } from "../controllers/Quiz";

quizRoutes.post("/dailyquiz", getDailyQuiz);
