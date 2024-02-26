import express from "express";
import { Request, Response } from "express";
import { Container } from "typedi";
import { STATUS_CODE } from "../utils/constants";

import AnswerService from "../services/AnswerService";

export const answerRoute = express.Router();
const answerService = Container.get(AnswerService);

answerRoute.get("/api/answer", async (_req: Request, res: Response) => {
  try {
    const answers = await answerService.getAllAnswers();

    return res.status(STATUS_CODE.OK).json(answers);
  } catch (error) {
    return error;
  }
});

export default answerRoute;
