import express, { Application } from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";

const app: Application = express();

// Security
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Parser
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

export default app;
