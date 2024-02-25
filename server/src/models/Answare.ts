import mongoose from "mongoose";
import questionSchema from "../schemas/questionSchema";

const Answare = mongoose.model("Answare", questionSchema);

export default Answare;
