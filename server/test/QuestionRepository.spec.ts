import { expect } from "chai";
import sinon from "sinon";
import Question from "../src/models/Question";
import QuestionRepository from "../src/repositories/QuestionRepository";
import CustomError from "../src/errorHandlers/ErrorHandler";
import { STATUS_CODE } from "../src/utils/constants";

describe("QuestionRepository", () => {
  describe("find", () => {
    it("should return an array of questions", async () => {
      const expectedQuestions = [
        { id: 1, content: "Question 1" },
        { id: 2, content: "Question 2" },
      ];
      sinon.stub(Question, "find").resolves(expectedQuestions);

      const questionRepository = new QuestionRepository();
      const result = await questionRepository.getQuestions();

      expect(result).to.deep.equal(expectedQuestions);
    });
  });
});
