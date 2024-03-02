import mongoose from "mongoose";
import { Service } from "typedi";
import { IAnswer } from "../interfaces/common";
import IAnswerRepositoryLayer from "../interfaces/repository/IAnswerRepositoryLayer";
import Answer from "../models/Answer";

@Service()
export default class AnswerRepository implements IAnswerRepositoryLayer {
  getAnswers = async (): Promise<IAnswer[]> => {
    try {
      return await Answer.find({}, { _id: 0, __v: 0 });
    } catch (error) {
      // throw new CustomError(error.statusCode, error.message);
      throw error;
    }
  };

  postAnswers = async (details: IAnswer): Promise<void> => {
    try {
      await Answer.create({
        questionId: details.questionId,
        type: details.type,
      });
    } catch (error) {
      // throw new CustomError(error.statusCode, error.message);
      throw error;
    }
  };

  putAnswers = async (questionId: string, type: string): Promise<void> => {
    try {
      const currentAnswer = await Answer.findOne({ questionId: questionId });

      if (!currentAnswer) {
        throw new Error("Nu exista");
      }

      await Answer.findOneAndUpdate({ questionId: questionId }, { type: type });
    } catch (error) {
      // throw new CustomError(error.statusCode, error.message);
      throw error;
    }
  };

  deleteAnswers = async (): Promise<void> => {
    try {
      await Answer.deleteMany({});
    } catch (error) {
      // throw new CustomError(error.statusCode, error.message);
      throw error;
    }
  };
}
