import express, { Application, Request, Response } from "express";
import { checkDbConnection, synchronizeDb } from "./dbConfig";

import { quizRoutes } from "./routes/Quiz";
import { userRoutes } from "./routes/User";

const app: Application = express();
const PORT = 3001;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res
    .status(200)
    .send({ message: `Hello, Welcome to the quizzin API!` });
});

// START SERVER
try {
  app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}🌈`);
  });
} catch (error: unknown) {
  if (error instanceof TypeError)
    console.log(`Error occurred: ${error.message}`);
}

checkDbConnection();
synchronizeDb();

// Routes
app.use("/api/quiz", quizRoutes);
app.use('/api/user',userRoutes);