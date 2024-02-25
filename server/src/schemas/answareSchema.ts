import mongoose from "mongoose";

const answareSchema = new mongoose.Schema({
  content: String,
  type: {
    type: String,
    required: true,
  },
});

export default answareSchema;
