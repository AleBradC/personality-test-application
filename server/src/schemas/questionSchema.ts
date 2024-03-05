import { Schema } from "mongoose";

const answerSchema = new Schema({
  questionId: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const questionSchema = new Schema({
  id: Number,
  content: String,
  answers: {
    type: [answerSchema],
    required: true,
  },
});

export default questionSchema;
