import express from "express";
import { Request, Response } from "express";
import { Container } from "typedi";
import { STATUS_CODE } from "../utils/constants";
import AnswerService from "../services/AnswerService";
import { ANSWERS } from "../utils/messages";

export const answerRoute = express.Router();
const answerService = Container.get(AnswerService);

answerRoute.post("/api/answer", async (req: Request, res: Response) => {
  try {
    const { questionId, type } = req.body;

    await answerService.addAnswers({
      questionId: questionId,
      type: type,
    });

    return res.status(STATUS_CODE.CREATED).send(ANSWERS.ADD);
  } catch (error) {
    return error;
  }
});

answerRoute.put(
  "/api/answer/:questionId",
  async (req: Request, res: Response) => {
    try {
      const { questionId } = req.params;
      const { type } = req.body;

      await answerService.updateAnswers(questionId, type);

      return res.status(STATUS_CODE.OK).send(ANSWERS.UPDATE);
    } catch (error) {
      return error;
    }
  }
);

answerRoute.get("/api/answer/result", async (_req: Request, res: Response) => {
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
  "/api/answer/delete",
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
