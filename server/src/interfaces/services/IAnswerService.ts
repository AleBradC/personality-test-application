import { IAnswer } from "../common";

export default interface IAnswerService {
  getResults: () => Promise<string>;
  addAnswers: (details: IAnswer) => Promise<void>;
  updateAnswers: (questionId: string, type: string) => Promise<void>;
  deleteAnswers: () => Promise<void>;
}
