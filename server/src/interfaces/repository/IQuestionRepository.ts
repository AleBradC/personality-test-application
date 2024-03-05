import { IQuestion } from "../common";

export default interface IQuestionRepositoryLayer {
  getQuestions: () => Promise<IQuestion[]>;
}
