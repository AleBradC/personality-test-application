import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.listen(8000, () => {
  console.log(`App is running on port ${8000}`);
});
