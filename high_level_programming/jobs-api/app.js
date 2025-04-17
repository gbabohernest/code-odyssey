import express from "express";
import { connectToDatabase } from "./database/db.connection.js";
import { PORT } from "./config/env.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import authRouter from "./routes/auth.route.js";
import jobRouter from "./routes/jobs.route.js";

const app = express();

app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Use the API with care...",
  });
});

app.use(errorMiddleware);
const port = PORT || 55000;
const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.log(`Jobs API server is running...`);
    });
  } catch (error) {
    console.error(error.message);
  }
};

await startServer();
