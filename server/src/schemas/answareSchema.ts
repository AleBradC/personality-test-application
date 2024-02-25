import { Schema } from "mongoose";

const answareSchema = new Schema({
  content: String,
  type: {
    type: String,
    required: true,
  },
});

export default answareSchema;
