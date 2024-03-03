import { IAnswer } from "../interfaces/common";

export const calculateResultHandler = (answers: IAnswer[]) => {
  const result = answers.reduce((acc, answer: IAnswer) => {
    acc[answer.type] = (acc[answer.type] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });

  let finalResult: string = "";
  Object.keys(result).forEach((key: string) => {
    if (result[key] === Math.max(result.introvert, result.extrovert)) {
      finalResult = key;
    }
  });

  return finalResult;
};
