export interface IAnswer {
  questionId: string;
  type: string;
}

export interface IQuestion {
  id: number;
  content: string;
  answers: IAnswer[];
}
