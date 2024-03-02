import express from "express";
import { Request, Response } from "express";
import { Container } from "typedi";
import { STATUS_CODE } from "../utils/constants";
import AnswerService from "../services/AnswerService";

export const answerRoute = express.Router();
const answerService = Container.get(AnswerService);

answerRoute.post("/api/answer", async (req: Request, res: Response) => {
  try {
    const { questionId, type } = req.body;
    await answerService.addAnswers({
      questionId: questionId,
      type: type,
    });

    return res.status(STATUS_CODE.OK).send("Answers added successfully");
  } catch (error) {
    return res
      .status(STATUS_CODE.INTERNAL_SERVER)
      .send("Failed to add answers");
  }
});

answerRoute.put(
  "/api/answer/:questionId",
  async (req: Request, res: Response) => {
    try {
      const { questionId } = req.params;
      const { type } = req.body;

      await answerService.updateAnswers(questionId, type);

      return res.status(STATUS_CODE.OK).send("Answers changed successfully");
    } catch (error) {
      console.log(error);
      return res
        .status(STATUS_CODE.INTERNAL_SERVER)
        .send("Failed to add answers");
    }
  }
);

answerRoute.get("/api/answer/result", async (_req: Request, res: Response) => {
  try {
    const answers = await answerService.getAllAnswers();

    return res.status(STATUS_CODE.OK).json(answers);
  } catch (error) {
    return error;
  }
});

answerRoute.delete(
  "/api/answer/delete",
  async (_req: Request, res: Response) => {
    try {
      await answerService.deleteAnswers();

      return res.status(STATUS_CODE.OK).json("S-a sters");
    } catch (error) {
      return error;
    }
  }
);

export default answerRoute;
