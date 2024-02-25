import mongoose from "mongoose";
import questionSchema from "../schemas/questionSchema";

const Question = mongoose.model("Question", questionSchema);

export default Question;
