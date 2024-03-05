import { Service, Container } from "typedi";

import AnswerRepository from "../repositories/AnswerRepository";
import IAnswerService from "../interfaces/services/IAnswerService";
import CustomError from "../errorHandlers/ErrorHandler";
import { IAnswer } from "../interfaces/common";
import { STATUS_CODE } from "../utils/constants";
import { calculateResultHandler } from "../utils/handlers";

@Service()
export default class AnswerService implements IAnswerService {
  private repository = Container.get(AnswerRepository);

  getResults = async (): Promise<string> => {
    try {
      const resultData = await this.repository.getAnswers();

      return calculateResultHandler(resultData);
    } catch (error) {
      throw new CustomError(STATUS_CODE.BAD_REQUEST, (error as Error).message);
    }
  };

  addAnswers = async (details: IAnswer): Promise<void> => {
    try {
      await this.repository.postAnswers({
        questionId: details.questionId,
        type: details.type,
      });
    } catch (error) {
      throw new CustomError(STATUS_CODE.BAD_REQUEST, (error as Error).message);
    }
  };

  updateAnswers = async (questionId: string, type: string): Promise<void> => {
    try {
      await this.repository.putAnswers(questionId, type);
    } catch (error) {
      throw new CustomError(STATUS_CODE.BAD_REQUEST, (error as Error).message);
    }
  };

  deleteAnswers = async (): Promise<void> => {
    try {
      return await this.repository.deleteAnswers();
    } catch (error) {
      throw new CustomError(STATUS_CODE.BAD_REQUEST, (error as Error).message);
    }
  };
}
