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
        id: 1,
      },
      {
        questionId: "2",
        type: "extrovert",
        id: 3,
      },
      {
        questionId: "3",
        type: "introvert",
        id: 5,
      },
    ];
  },
  postAnswers: async (answer: IAnswer[]): Promise<void> => {},
  putAnswers: async (id: string, type: string): Promise<void> => {},
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
      const answers: IAnswer[] = [
        {
          questionId: "4",
          type: "introvert",
          id: 1,
        },
      ];
      const spyFunction = sinon.spy(mockAnswerRepository, "postAnswers");
      await answerService.addAnswers(answers);

      expect(spyFunction.calledOnceWithExactly(answers)).to.be.true;
    });

    it("should throw an error when repository fails", async () => {
      Container.set(AnswerRepository, {
        postAnswers: async () => {
          throw new Error("Repository failed");
        },
      });

      const answers: IAnswer[] = [
        {
          questionId: "4",
          type: "introvert",
          id: 1,
        },
      ];

      try {
        await answerService.addAnswers(answers);
        throw new Error("Expected error but got success");
      } catch (error) {
        expect(error).to.be.an.instanceOf(Error);
      }
    });
  });

  describe("PUT", () => {
    it("should handle updating answer", async () => {
      const id = "1";
      const type = "introvert";

      const spyFunction = sinon.spy(mockAnswerRepository, "putAnswers");
      await answerService.updateAnswers(id, type);

      expect(spyFunction.calledOnceWithExactly(id, type)).to.be.true;
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
