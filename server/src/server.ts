import http from "http";
import dotenv from "dotenv";
import app from "./app";
import connectDB from "./dbConnection";

dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.DB_URI as string;

const server = http.createServer(app);

const startServer = async () => {
  await connectDB(MONGO_URI);

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
};

startServer();
