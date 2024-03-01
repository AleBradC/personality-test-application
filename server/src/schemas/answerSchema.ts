import { Schema } from "mongoose";

const answerSchema = new Schema(
  {
    questionId: String,
    type: {
      type: String, // extrovert or introvert
      required: true,
    },
  },
  { _id: false, __v: false }
);

export default answerSchema;
