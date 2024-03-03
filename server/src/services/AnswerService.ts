import { Service, Container } from "typedi";

import AnswerRepository from "../repositories/AnswerRepository";
import { IAnswer } from "../interfaces/common";
import IAnswerService from "../interfaces/services/IAnswerService";
import CustomError from "../errorHandlers/ErrorHandler";
import { STATUS_CODE } from "../utils/constants";

@Service()
export default class AnswerService implements IAnswerService {
  private repository = Container.get(AnswerRepository);

  getAllAnswers = async (): Promise<IAnswer[]> => {
    try {
      return await this.repository.getAnswers();
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
