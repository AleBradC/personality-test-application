import { Service, Container } from "typedi";

import QuestionRepository from "../repositories/QuestionRepository";
import { IQuestion } from "../interfaces/common";
import IQuestionService from "../interfaces/services/IQuestionService";
import CustomError from "../errorHandlers/ErrorHandler";

@Service()
export default class QuestionService implements IQuestionService {
  private repository = Container.get(QuestionRepository);

  getAllQuestions = async (): Promise<IQuestion[]> => {
    try {
      return await this.repository.getQuestions();
    } catch (error) {
      // throw new CustomError(error.statusCode, error.message);
      throw error;
    }
  };
}
