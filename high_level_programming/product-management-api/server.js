import express from "express";
import { PORT } from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("hi there , route is working");
  console.log(PORT);
});

app.listen(PORT, () => {
  console.log(
    `Product Management API is now listening on http://localhost:${PORT}`,
  );
});
