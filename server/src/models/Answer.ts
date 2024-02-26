import mongoose from "mongoose";
import answerSchema from "../schemas/answerSchema";

const Answer = mongoose.model("Answer", answerSchema);

export default Answer;
