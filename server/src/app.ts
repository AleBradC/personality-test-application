import "reflect-metadata";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swaggerDocument.json";
import express, { Application } from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import { Container } from "typedi";
import QuestionService from "./services/QuestionService";

import questionRoute from "./routes/question";
import answerRoute from "./routes/answer";

const app: Application = express();
Container.set("IQuestionService", QuestionService);

// Security
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Parser
app.use(bodyParser.json());

// Routes
app.use(questionRoute);
app.use(answerRoute);

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
