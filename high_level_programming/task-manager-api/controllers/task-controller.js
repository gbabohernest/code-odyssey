import Task from '../models/tasks-model.js';

const getAllTask = async (req, res) => {
  try {
    const tasks = Task.find({});
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
      message: 'task created successfully',
      data: task,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e,
    });
  }
};

export { createTask, getAllTask };
