import express from "express";

export const quizRoutes = express.Router();

import { getDailyQuiz, getWeeklyQuiz, getMonthlyQuiz } from "../controllers/Quiz";

quizRoutes.post("/dailyquiz", getDailyQuiz);
quizRoutes.post("/weeklyquiz", getWeeklyQuiz);
quizRoutes.post("/monthlyquiz", getMonthlyQuiz);
