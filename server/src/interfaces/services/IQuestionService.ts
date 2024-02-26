import { IQuestion } from "../common";

export default interface IQuestionService {
  getAllQuestions: () => Promise<IQuestion[]>;
}
