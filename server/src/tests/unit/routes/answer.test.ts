import request from "supertest";
import app from "../../../app";
import { STATUS_CODE } from "../../../utils/constants";

describe("answer route", () => {
  it("should get the data on /api/answer", async () => {
    return request(app).get("/api/answer").expect(STATUS_CODE.OK);
  });
});
