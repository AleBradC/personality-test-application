import { Service, Container } from "typedi";

import QuestionRepository from "../repositories/QuestionRepository";
import IQuestionService from "../interfaces/services/IQuestionService";
import CustomError from "../errorHandlers/ErrorHandler";
import { IQuestion } from "../interfaces/common";
import { STATUS_CODE } from "../utils/constants";

@Service()
export default class QuestionService implements IQuestionService {
  private repository = Container.get(QuestionRepository);

  getAllQuestions = async (): Promise<IQuestion[]> => {
    try {
      return await this.repository.getQuestions();
    } catch (error) {
      throw new CustomError(STATUS_CODE.BAD_REQUEST, (error as Error).message);
    }
  };
}
