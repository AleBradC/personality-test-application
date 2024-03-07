import { IAnswer } from "../common";

export default interface IAnswerRepositoryLayer {
  getAnswers: () => Promise<IAnswer[]>;
  postAnswers: (answers: IAnswer[]) => Promise<void>;
  putAnswers: (questionId: string, type: string) => Promise<void>;
  deleteAnswers: () => Promise<void>;
}
