import express from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();

// middleswares
app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.listen(8000, () => {
  console.log(`App is running on port ${8000}`);
});
