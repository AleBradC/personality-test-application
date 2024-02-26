import { Schema } from "mongoose";
import answareSchema from "./answerSchema";

const questionSchema = new Schema({
  id: Number,
  content: String,
  answers: {
    type: [answareSchema],
    required: true,
  },
});

export default questionSchema;
