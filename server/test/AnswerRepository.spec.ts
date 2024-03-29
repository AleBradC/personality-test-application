import { expect } from "chai";
import sinon from "sinon";
import Answer from "../src/models/Answer";
import AnswerRepository from "../src/repositories/AnswerRepository";
import { IAnswer } from "src/interfaces/common";

describe("AnswerRepository", () => {
  describe("find", () => {
    it("should return an array of answers", async () => {
      const expectedAnswers = [
        { questionId: 1, type: "introvert" },
        { questionId: 2, type: "extrovert" },
      ];
      sinon.stub(Answer, "find").resolves(expectedAnswers);

      const answerRepository = new AnswerRepository();
      const result = await answerRepository.getAnswers();

      expect(result).to.deep.equal(expectedAnswers);
    });
  });

  describe("create", () => {
    it("should add answers", async () => {
      const answers: IAnswer[] = [
        {
          questionId: "2",
          type: "introvert",
          id: 1,
        },
      ];
      const createStub = sinon.stub(Answer, "create").resolves();

      const answerRepository = new AnswerRepository();
      await answerRepository.postAnswers(answers);

      expect(createStub.calledOnceWithExactly(answers)).to.be.true;
    });
  });

  describe("update", () => {
    it("should update the answer", async () => {
      const id = "1";
      const type = "introvert";
      const findOneStub = sinon
        .stub(Answer, "findOne")
        .resolves({ id: id, type: "extrovert" });
      const findOneAndUpdateStub = sinon
        .stub(Answer, "findOneAndUpdate")
        .resolves();

      const answerRepository = new AnswerRepository();
      await answerRepository.putAnswers(id, type);

      expect(findOneStub.calledOnceWithExactly({ id: id })).to.be.true;
      expect(
        findOneAndUpdateStub.calledOnceWithExactly({ id: id }, { type: type })
      ).to.be.true;
    });
  });

  describe("delete", () => {
    it("should create a new answer", async () => {
      const deleteSub = sinon.stub(Answer, "deleteMany").resolves();

      const answerRepository = new AnswerRepository();
      await answerRepository.deleteAnswers();

      expect(deleteSub.calledOnce);
    });
  });
});
