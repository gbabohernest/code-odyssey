import Task from "../models/tasks-model.js";
// import { asyncWrapper } from "../middlewares/async-middleware.js";

const getAllTask = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ success: true, data: tasks });
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({
    success: true,
    message: "task created successfully",
    data: task,
  });
};

const getSingleTask = async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    const error = new Error("Task Not Found");
    error.statusCode = 404;
    throw error;
  }
  res.status(200).json({ success: true, data: task });
};

const updateTask = async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    const error = new Error("Task Not Found");
    error.statusCode = 404;
    throw error;
  }

  res
    .status(200)
    .json({ success: true, message: "update success", data: task });
};

const deleteTask = async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    const error = new Error("No Task Found");
    error.statusCode = 404;
    throw error;
  }
  res.status(204).end();
};

export { createTask, getAllTask, getSingleTask, updateTask, deleteTask };
