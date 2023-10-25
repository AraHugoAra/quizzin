import express, { Application, Request, Response } from "express";
import { checkDbConnection, synchronizeDb } from "./dbConfig";
import { User, Category, Score } from "./models";

const app: Application = express();
const PORT = 3000;

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

const createdb = async () => {
  await User.create({ userName: "Yiyi" });
  await Category.create({ categoryName: "Histoire" });
  await Score.create({ weeklyScore: 100 });
  // await Quiz.create({ questions: 100 });
};

createdb();
