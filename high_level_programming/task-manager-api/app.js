import express from "express";
import { PORT } from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";
import taskRouter from "./routes/task.routes.js";

const app = express();
app.use(express.json());
app.use("/api/v1/tasks", taskRouter);

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "Welcome to the task-manager-api." });
});

const startSever = async () => {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`Task Manager Api is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error.message);
  }
};

await startSever();
