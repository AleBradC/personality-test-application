import { Schema } from "mongoose";
import answerSchema from "./answerSchema";

const questionSchema = new Schema({
  id: Number,
  content: String,
  answers: {
    type: [answerSchema],
    required: true,
  },
});

export default questionSchema;
