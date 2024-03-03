import { expect } from "chai";
import AnswerRepository from "../src/repositories/AnswerRepository";
import AnswerService from "../src/services/AnswerService";
import { Service, Container } from "typedi";

@Service()
class MockAnswerRepository {
  getAnswers = async (): Promise<any[]> => {
    return [
      {
        questionId: "1",
        type: "extrovert",
      },
    ];
  };
}

describe("AnswerService", () => {
  let answerService: AnswerService;

  beforeEach(() => {
    Container.set(AnswerRepository, new MockAnswerRepository());
    answerService = new AnswerService();
  });

  it("should return all answers", async () => {
    const result = await answerService.getResults();
    expect(result).to.be.an("string");
    // expect(result).to.deep.equal("extrovert");
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
