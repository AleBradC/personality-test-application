export interface IAnswer {
  questionId: number;
  type: string;
}

export interface IQuestion {
  id: number;
  content: string;
  answers: IAnswer[];
}
