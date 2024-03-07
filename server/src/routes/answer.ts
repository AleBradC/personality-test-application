import express from "express";
import { Request, Response } from "express";
import { Container } from "typedi";
import { STATUS_CODE } from "../utils/constants";
import AnswerService from "../services/AnswerService";
import { ANSWERS } from "../utils/messages";

export const answerRoute = express.Router();
const answerService = Container.get(AnswerService);

answerRoute.post("/api/answers", async (req: Request, res: Response) => {
  try {
    const { answers } = req.body;
    await answerService.addAnswers(answers);

    return res.status(STATUS_CODE.CREATED).send(ANSWERS.ADD);
  } catch (error) {
    return error;
  }
});

answerRoute.put("/api/answers/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { type } = req.body;

    await answerService.updateAnswers(type, id);

    return res.status(STATUS_CODE.OK).send(ANSWERS.UPDATE);
  } catch (error) {
    return error;
  }
});

answerRoute.get("/api/answers/result", async (_req: Request, res: Response) => {
  try {
    const result = await answerService.getResults();

    if (result) {
      return res.status(STATUS_CODE.OK).json({
        result: result,
      });
    } else {
      return res.status(STATUS_CODE.OK).json({
        result: ANSWERS.NO_RESULTS,
      });
    }
  } catch (error) {
    return error;
  }
});

answerRoute.delete(
  "/api/answers/delete",
  async (_req: Request, res: Response) => {
    try {
      await answerService.deleteAnswers();

      return res.status(STATUS_CODE.OK).json(ANSWERS.DELETE);
    } catch (error) {
      return error;
    }
  }
);

export default answerRoute;
