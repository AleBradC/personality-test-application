import { IAnswer } from "../common";

export default interface IAnswerService {
  getAllAnswers: () => Promise<IAnswer[]>;
  addAnswers: (details: IAnswer) => Promise<void>;
  updateAnswers: (questionId: string, type: string) => Promise<void>;
  deleteAnswers: () => Promise<void>;
}
