import { Schema } from "mongoose";

const answerSchema = new Schema({
  questionId: String,
  type: {
    type: String,
    required: true,
  },
});

export default answerSchema;
