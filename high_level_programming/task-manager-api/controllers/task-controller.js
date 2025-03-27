import Task from "../models/tasks-model.js";

const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ success: true, data: tasks });
  } catch (e) {
    res.status(500).json({ success: false, message: e });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({
      success: true,
      message: "task created successfully",
      data: task,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e,
    });
  }
};

const getSingleTask = async (req, res) => {
  console.log("hi");
};

const updateTask = async (req, res) => {
  console.log(hi);
};

const deleteTask = async (req, res) => {
  console.log(hiii);
};

export { createTask, getAllTask, getSingleTask, updateTask, deleteTask };
