import express from "express";

export const quizAnswerRoutes = express.Router();

import { createQuizAnswer } from "../controllers/Quiz_Answer";

quizAnswerRoutes.post("/", createQuizAnswer);
