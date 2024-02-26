import express from "express";
import { Request, Response } from "express";
import { Container } from "typedi";
import { STATUS_CODE } from "../utils/constants";
import QuestionService from "../services/QuestionService";

export const questionRoute = express.Router();
const questionService = Container.get(QuestionService);

questionRoute.get("/api/question", async (_req: Request, res: Response) => {
  try {
    const questions = await questionService.getAllQuestions();

    return res.status(STATUS_CODE.OK).json(questions);
  } catch (error) {
    return error;
  }
});

export default questionRoute;
