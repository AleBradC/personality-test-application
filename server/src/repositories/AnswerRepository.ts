import mongoose from "mongoose";
import { Service } from "typedi";
import { IAnswer } from "../interfaces/common";
import IAnswerRepositoryLayer from "../interfaces/repository/IAnswerRepository";
import Answer from "../models/Answer";
import CustomError from "../errorHandlers/ErrorHandler";
import { STATUS_CODE } from "../utils/constants";

@Service()
export default class AnswerRepository implements IAnswerRepositoryLayer {
  getAnswers = async (): Promise<IAnswer[]> => {
    try {
      return await Answer.find({}, { _id: 0, __v: 0 });
    } catch (error) {
      throw new CustomError(STATUS_CODE.BAD_REQUEST, (error as Error).message);
    }
  };

  postAnswers = async (answers: IAnswer[]): Promise<void> => {
    try {
      await Answer.create(answers);
    } catch (error) {
      throw new CustomError(STATUS_CODE.BAD_REQUEST, (error as Error).message);
    }
  };

  putAnswers = async (id: string, type: string): Promise<void> => {
    try {
      const currentAnswer = await Answer.findOne({ id: id });

      if (!currentAnswer) {
        throw new CustomError(STATUS_CODE.NOT_FOUND, "The answer is not found");
      }

      await Answer.findOneAndUpdate({ id: id }, { type: type });
    } catch (error) {
      throw new CustomError(STATUS_CODE.BAD_REQUEST, (error as Error).message);
    }
  };

  deleteAnswers = async (): Promise<void> => {
    try {
      await Answer.deleteMany({});
    } catch (error) {
      throw new CustomError(STATUS_CODE.BAD_REQUEST, (error as Error).message);
    }
  };
}
