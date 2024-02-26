import { Service, Container } from "typedi";

import AnswerRepository from "../repositories/AnswerRepository";
import { IAnswer } from "../interfaces/common";
import IAnswerService from "../interfaces/services/IAnswerService";
import CustomError from "../errorHandlers/ErrorHandler";

@Service()
export default class AnswerService implements IAnswerService {
  private repository = Container.get(AnswerRepository);

  getAllAnswers = async (): Promise<IAnswer[]> => {
    try {
      return await this.repository.getAllAnswers();
    } catch (error) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
