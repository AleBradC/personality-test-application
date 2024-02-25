import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "../dbConnection";

dotenv.config();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.DB_URI as string;

const app = express();

// middleswares
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

connectDB(MONGO_URI);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
