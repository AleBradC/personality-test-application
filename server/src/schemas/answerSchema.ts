import { Schema } from "mongoose";

const answerSchema = new Schema({
  questionId: String,
  id: Number,
  type: {
    type: String,
    required: true,
  },
});

export default answerSchema;
