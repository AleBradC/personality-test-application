import { expect } from "chai";
import sinon from "sinon";
import { Container } from "typedi";
import AnswerRepository from "../src/repositories/AnswerRepository";
import AnswerService from "../src/services/AnswerService";
import { IAnswer } from "../src/interfaces/common";

const mockAnswerRepository = {
  getAnswers: async (): Promise<IAnswer[]> => {
    return [
      {
        questionId: "1",
        type: "extrovert",
      },
      {
        questionId: "2",
        type: "extrovert",
      },
      {
        questionId: "3",
        type: "introvert",
      },
    ];
  },
  postAnswers: async (details: IAnswer): Promise<void> => {},
  putAnswers: async (questionId: string, type: string): Promise<void> => {},
  deleteAnswers: async (): Promise<void> => {},
};

describe("AnswerService", () => {
  let answerService: AnswerService;

  beforeEach(() => {
    Container.set(AnswerRepository, mockAnswerRepository);
    answerService = new AnswerService();
  });

  describe("GET", () => {
    it("should return introvert or extrovert", async () => {
      const result = await answerService.getResults();
      expect(result).to.be.an("string");
      expect(result).to.equal("extrovert");
    });

    it("should throw an error when repository fails", async () => {
      Container.set(AnswerRepository, {
        getAnswers: async () => {
          throw new Error("Repository failed");
        },
      });

      try {
        await answerService.getResults();
        throw new Error("Expected error but got success");
      } catch (error) {
        expect(error).to.be.an.instanceOf(Error);
      }
    });
  });

  describe("POST", () => {
    it("should handle adding answers", async () => {
      const details: IAnswer = {
        questionId: "4",
        type: "introvert",
      };
      const spyFunction = sinon.spy(mockAnswerRepository, "postAnswers");
      await answerService.addAnswers(details);

      expect(spyFunction.calledOnceWithExactly(details)).to.be.true;
    });

    it("should throw an error when repository fails", async () => {
      Container.set(AnswerRepository, {
        postAnswers: async () => {
          throw new Error("Repository failed");
        },
      });

      const details: IAnswer = {
        questionId: "4",
        type: "introvert",
      };

      try {
        await answerService.addAnswers(details);
        throw new Error("Expected error but got success");
      } catch (error) {
        expect(error).to.be.an.instanceOf(Error);
      }
    });
  });

  describe("PUT", () => {
    it("should handle updating answer", async () => {
      const questionId = "1";
      const type = "introvert";

      const spyFunction = sinon.spy(mockAnswerRepository, "putAnswers");
      await answerService.updateAnswers(questionId, type);

      expect(spyFunction.calledOnceWithExactly(questionId, type)).to.be.true;
    });

    it("should throw an error when repository fails", async () => {
      Container.set(AnswerRepository, {
        putAnswers: async () => {
          throw new Error("Repository failed");
        },
      });

      const questionId = "1";
      const type = "introvert";

      try {
        await answerService.updateAnswers(questionId, type);
        throw new Error("Expected error but got success");
      } catch (error) {
        expect(error).to.be.an.instanceOf(Error);
      }
    });
  });

  describe("DELETE", () => {
    it("should handle deleting all answers", async () => {
      const spyFunction = sinon.spy(mockAnswerRepository, "deleteAnswers");
      await answerService.deleteAnswers();

      expect(spyFunction.calledOnceWithExactly()).to.be.true;
    });

    it("should throw an error when repository fails", async () => {
      Container.set(AnswerRepository, {
        deleteAnswers: async () => {
          throw new Error("Repository failed");
        },
      });

      try {
        await answerService.deleteAnswers();
        throw new Error("Expected error but got success");
      } catch (error) {
        expect(error).to.be.an.instanceOf(Error);
      }
    });
  });
});
