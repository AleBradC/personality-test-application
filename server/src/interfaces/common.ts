export interface IAnswer {
  questionId: string;
  type: string;
  id: number;
}

export interface IQuestionAnswer {
  content: string;
  type: string;
  id: number;
}
export interface IQuestion {
  id: number;
  content: string;
  answers: IQuestionAnswer[];
}
