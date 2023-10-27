import express from "express";

export const quizRoutes = express.Router();

import createQuiz from "../controllers/Quiz";

quizRoutes.post("/", createQuiz);
