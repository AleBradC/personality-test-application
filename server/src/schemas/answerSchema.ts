import { Schema } from "mongoose";

const answerSchema = new Schema(
  {
    questionId: String,
    type: {
      type: String,
      required: true,
    },
  },
  { _id: false, __v: false }
);

export default answerSchema;
