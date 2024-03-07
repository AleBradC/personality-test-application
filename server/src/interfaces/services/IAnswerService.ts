import { IAnswer } from "../common";

export default interface IAnswerService {
  getResults: () => Promise<string>;
  addAnswers: (answers: IAnswer[]) => Promise<void>;
  updateAnswers: (type: string, id: string) => Promise<void>;
  deleteAnswers: () => Promise<void>;
}
