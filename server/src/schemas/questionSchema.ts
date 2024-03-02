import { Schema } from "mongoose";
import answerSchema from "./answerSchema";

const questionSchema = new Schema(
  {
    id: Number,
    content: String,
    answers: {
      type: [answerSchema],
      required: true,
    },
  }
  // { _id: false, __v: false }
);

export default questionSchema;
