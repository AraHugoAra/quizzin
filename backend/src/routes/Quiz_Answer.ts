import express from "express";

export const quizAnswerRoutes = express.Router();

import {
    createQuizAnswer,
    getQuizAnswersByUserAndQuizType,
} from "../controllers/Quiz_Answer";

quizAnswerRoutes.post("/", createQuizAnswer);
quizAnswerRoutes.get("/:quizType/:userId", getQuizAnswersByUserAndQuizType);
