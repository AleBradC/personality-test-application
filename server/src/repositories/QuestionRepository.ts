import { Service } from "typedi";

import Question from "../models/Question";

import IQuestionRepositoryLayer from "../interfaces/repository/IQuestionRepositoryLayer";
import { IQuestion } from "../interfaces/common";

import CustomError from "../errorHandlers/ErrorHandler";

@Service()
export default class QuestionRepository implements IQuestionRepositoryLayer {
  getQuestions = async (): Promise<IQuestion[]> => {
    try {
      return await Question.find();
    } catch (error) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
