import mongoose from "mongoose";

const connectDB = async (MONGO_URI: string) => {
  try {
    await mongoose
      .set("strictQuery", false)
      .connect(MONGO_URI)
      .then(() => console.log("MongoDB connection established..."))
      .catch((error) =>
        console.error("MongoDB connection failed:", error.message)
      );
  } catch (error) {
    console.log(`Error ${error}`);
    process.exit(1);
  }
};

export default connectDB;
