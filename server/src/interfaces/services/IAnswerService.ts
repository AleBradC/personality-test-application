import { IAnswer } from "../common";

export default interface IAnswerService {
  getAllAnswers: () => Promise<IAnswer[]>;
}
