import { expect } from "chai";
import { Container } from "typedi";
import QuestionService from "../src/services/QuestionService";
import QuestionRepository from "../src/repositories/QuestionRepository";
import { IQuestion } from "../src/interfaces/common";

const mockQuestionRepository = {
  getQuestions: async (): Promise<IQuestion[]> => {
    return [
      {
        id: 1,
        content:
          "You're really busy at work and a colleague is telling you their life story and personal woes. You:",
        answers: [
          {
            id: 1,
            content: "Don't dare to interrupt them",
            type: "introvert",
          },
          {
            id: 2,
            content:
              "Think it's more important to give them some of your time; work can wait",
            type: "extrovert",
          },
          {
            id: 3,
            content: "Listen, but with only with half an ear",
            type: "introvert",
          },
          {
            id: 4,
            content:
              "Interrupt and explain that you are really busy at the moment",
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
          id: 1,
          content:
            "You're really busy at work and a colleague is telling you their life story and personal woes. You:",
          answers: [
            {
              id: 1,
              content: "Don't dare to interrupt them",
              type: "introvert",
            },
            {
              id: 2,
              content:
                "Think it's more important to give them some of your time; work can wait",
              type: "extrovert",
            },
            {
              id: 3,
              content: "Listen, but with only with half an ear",
              type: "introvert",
            },
            {
              id: 4,
              content:
                "Interrupt and explain that you are really busy at the moment",
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
