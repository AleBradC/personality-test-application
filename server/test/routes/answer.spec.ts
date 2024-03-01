import "reflect-metadata";
import { expect } from "chai";
import "mocha";
import express, { Express } from "express";
import request from "supertest";
import { Container } from "typedi";
import answerRoute from "../../src/routes/answer";
import AnswerService from "../../src/services/AnswerService";

describe("Answer Route", () => {
  let app: Express;

  before(() => {
    // Initialize Express app
    app = express();

    // Mount route on the Express app
    app.use("/api", answerRoute);

    // Mock the AnswerService for testing
    Container.set(AnswerService, {
      getAllAnswers: () =>
        Promise.resolve([
          {
            questionId: "1",
            type: "extrovert",
          },
        ]),
    });
  });

  it("should return all answers with status code 200", async () => {
    // Make a request to the route
    const res = await request(app).get("/api/answer");

    // Check the response status code
    expect(res.status).to.equal([
      {
        questionId: "1",
        type: "extrovert",
      },
    ]);

    // Add more assertions to validate the response body, if needed
  });

  //   it("should handle errors gracefully", async () => {
  //     // Change the behavior of the AnswerService to simulate an error
  //     Container.set(AnswerService, {
  //       getAllAnswers: () => Promise.reject(new Error("Internal Server Error")),
  //     });

  //     // Make a request to the route
  //     const res = await request(app).get("/api/answer");

  //     // Check the response status code for error handling
  //     expect(res.status).to.equal(500);

  //     // Add more assertions to validate the error response, if needed
  //   });
});
