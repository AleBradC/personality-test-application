export interface IAnsware {
  questionId: number;
  type: string;
}

export interface IQuestion {
  id: number;
  content: string;
  answares: IAnsware[];
}
