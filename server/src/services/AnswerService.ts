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

  addAnswers = async (answers: IAnswer[]): Promise<void> => {
    try {
      await this.repository.postAnswers(answers);
    } catch (error) {
      throw new CustomError(STATUS_CODE.BAD_REQUEST, (error as Error).message);
    }
  };

  updateAnswers = async (id: string, type: string): Promise<void> => {
    try {
      await this.repository.putAnswers(id, type);
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
