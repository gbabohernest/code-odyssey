import Task from "../models/tasks-model.js";
import { asyncWrapper } from "../middlewares/async-middleware.js";

const getAllTask = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ success: true, data: tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({
    success: true,
    message: "task created successfully",
    data: task,
  });
});

const getSingleTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return res.status(404).json({ success: false, message: "Task Not Found" });
  }
  res.status(200).json({ success: true, data: task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ success: false, message: "Task Not found" });
  }

  res
    .status(200)
    .json({ success: true, message: "update success", data: task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    return res.status(404).json({ success: false, message: "No task found" });
  }
  res.status(204).end();
});

export { createTask, getAllTask, getSingleTask, updateTask, deleteTask };
