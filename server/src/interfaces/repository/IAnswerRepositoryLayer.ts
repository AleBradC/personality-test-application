import { IAnswer } from "../common";

export default interface IAnswerRepositoryLayer {
  getAllAnswers: () => Promise<IAnswer[]>;
}
