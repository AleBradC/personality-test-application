import { expect } from "chai";
import { Container } from "typedi";
import QuestionService from "../src/services/QuestionService";
import QuestionRepository from "../src/repositories/QuestionRepository";
import { IQuestion } from "../src/interfaces/common";

const mockQuestionRepository = {
  getQuestions: async (): Promise<IQuestion[]> => {
    return [
      {
        id: 9,
        content:
          "You're out with a group of friends and there's a person who's quite shy and doesn't talk much. You:",
        answers: [
          {
            content:
              "Notice that they're alone, but don't go over to talk with them",
            type: "introvert",
          },
          {
            content: "Go and have a chat with them",
            type: "extrovert",
          },
          {
            content: "Hardly notice them at all",
            type: "introvert",
          },
          {
            content: "Shoot some friendly smiles in their direction",
            type: "extrovert",
          },
        ],
      },
    ];
  },
};

describe("QuestionService", () => {
  let questionService: QuestionService;

  beforeEach(() => {
    Container.set(QuestionRepository, mockQuestionRepository);
    questionService = new QuestionService();
  });

  describe("GET", () => {
    it("should return all the questions", async () => {
      const response = [
        {
          id: 9,
          content:
            "You're out with a group of friends and there's a person who's quite shy and doesn't talk much. You:",
          answers: [
            {
              content:
                "Notice that they're alone, but don't go over to talk with them",
              type: "introvert",
            },
            {
              content: "Go and have a chat with them",
              type: "extrovert",
            },
            {
              content: "Hardly notice them at all",
              type: "introvert",
            },
            {
              content: "Shoot some friendly smiles in their direction",
              type: "extrovert",
            },
          ],
        },
      ];

      const result = await questionService.getAllQuestions();
      expect(result).to.be.a("array");
      expect(result).to.deep.equal(response);
    });

    it("should throw an error when repository fails", async () => {
      Container.set(QuestionRepository, {
        getQuestions: async () => {
          throw new Error("Repository failed");
        },
      });

      try {
        await questionService.getAllQuestions();
        throw new Error("Expected error but got success");
      } catch (error) {
        expect(error).to.be.an.instanceOf(Error);
      }
    });
  });
});
