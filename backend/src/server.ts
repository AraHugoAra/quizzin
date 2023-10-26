import express, { Application, Request, Response } from "express";
import { checkDbConnection, synchronizeDb } from "./dbConfig";
import { User ,Answer, Category ,Quiz, Score, Quiz_Participation } from "./models";

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



const createdb = async () => {
  await User.create({ userName: "test" });
  // await Category.create({ categoryName: "Geo" });
  // await Answer.create( {userId : 1, categoryId : 1 , quizId :1, difficulty : 'easy', question : 'Mais QUI ?', isCorrect : true, duration : 1, date : '2023-06-01T00:00:00Z'});
  // await Score.create({userId : 1, weeklyScore: 100 });
  // await Quiz.create({ questions: {"question" : "reponse"}, date : '2023-06-01T00:00:00Z', quizType : 'daily'});
  // await Quiz_Participation.create({userId : 1, quizId : 1});
};

createdb();