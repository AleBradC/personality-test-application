import mongoose from "mongoose";
import answareSchema from "./answareSchema";

const questionSchema = new mongoose.Schema({
  id: Number,
  content: String,
  answers: {
    type: [answareSchema],
    required: true,
  },
});

export default questionSchema;
