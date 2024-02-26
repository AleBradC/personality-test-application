import { Service } from "typedi";

import IAnswerRepositoryLayer from "../interfaces/repository/IAnswerRepositoryLayer";
import { IAnswer } from "../interfaces/common";

import CustomError from "../errorHandlers/ErrorHandler";
import Answer from "../models/Answer";

@Service()
export default class AnswerRepository implements IAnswerRepositoryLayer {
  getAnswers = async (): Promise<IAnswer[]> => {
    try {
      return await Answer.find({}, { _id: 0, __v: 0 });
    } catch (error) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
