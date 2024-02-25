import "reflect-metadata";
import express, { Application } from "express";
import { Container } from "typedi";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import QuestionService from "./services/QuestionService";

const app: Application = express();
const questionsService = Container.get(QuestionService);

// Security
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Parser
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  const questions = await questionsService.getAllQuestions();

  res.status(200).json({
    result: questions,
  });
});

export default app;
