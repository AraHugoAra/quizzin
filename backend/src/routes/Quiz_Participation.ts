import express from "express";

export const quizParticipationRoutes = express.Router();

import {
  createQuizParticipation
} from "../controllers/Quiz_Participation";
import { checkDuplicateQuizParticipation } from "../middlewares/checkDuplicateQuizParticipation";

quizParticipationRoutes.post("/",checkDuplicateQuizParticipation, createQuizParticipation);