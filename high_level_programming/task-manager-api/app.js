import express from "express";
import { PORT } from "./config/env.js";
import "express-async-errors";
import connectToDatabase from "./database/mongodb.js";
import taskRouter from "./routes/task.routes.js";
import { errorMiddleware } from "./middlewares/error-middleware.js";

const app = express();
app.use(express.json());
app.use("/api/v1/tasks", taskRouter);

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "Welcome to the task-manager-api." });
});

app.all("*", (req, res) => {
  res
    .status(404)
    .send(`<h2>Sorry, I do not know what you are looking for.  </h2>`);
});

app.use(errorMiddleware);

const port = PORT || 3000;
const startSever = async () => {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.log(`Task Manager API is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error.message);
  }
};

await startSever();
