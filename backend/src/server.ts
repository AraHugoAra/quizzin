import express, { Application, Request, Response } from "express";
import { checkDbConnection } from "./dbConfig";

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
    console.log(`Server is started🌈`);
  });
} catch (error: unknown) {
  if (error instanceof TypeError)
    console.log(`Error occurred: ${error.message}`);
}

checkDbConnection();
