export interface Answer {
  questionId: string;
  type: string;
}

export interface QuestionAnswer {
  content: string;
  type: string;
}
export interface Question {
  id: number;
  content: string;
  answers: QuestionAnswer[];
}

export interface AnswerParams {
  questionId: string;
  type: string;
}
