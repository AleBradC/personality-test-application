import { Service } from "typedi";

import Question from "../models/Question";
import IQuestionRepositoryLayer from "../interfaces/repository/IQuestionRepositoryLayer";
import { IQuestion } from "../interfaces/common";

import CustomError from "../errorHandlers/ErrorHandler";
import { STATUS_CODE } from "../utils/constants";

@Service()
export default class QuestionRepository implements IQuestionRepositoryLayer {
  getQuestions = async (): Promise<IQuestion[]> => {
    try {
      return await Question.find({}, { _id: 0, __v: 0 }).lean();
    } catch (error) {
      throw new CustomError(STATUS_CODE.BAD_REQUEST, (error as Error).message);
    }
  };
}
