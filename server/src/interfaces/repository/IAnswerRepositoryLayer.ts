import { IAnswer } from "../common";

export default interface IAnswerRepositoryLayer {
  getAnswers: () => Promise<IAnswer[]>;
}
