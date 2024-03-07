export interface Answer {
  questionId: number;
  type: string;
  id: number;
}

export interface QuestionAnswer {
  content: string;
  type: string;
  id: number;
}
export interface Question {
  id: number;
  content: string;
  answers: QuestionAnswer[];
}

export interface AnswerParams {
  questionId: number;
  type: string;
  id: number;
}
