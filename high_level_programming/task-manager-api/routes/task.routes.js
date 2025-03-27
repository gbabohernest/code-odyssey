import { Router } from 'express';
const taskRouter = Router();

/**
 ** /api/v1/tasks
 */

taskRouter.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'GET all tasks' });
});

taskRouter.post('/', (req, res) => {
  res
    .status(201)
    .json({ success: true, message: 'Created a tasks', data: req.body });
});

taskRouter.get('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Get a single task',
  });
});

taskRouter.put('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Updated successfully',
    data: req.body,
  });
});

taskRouter.delete('/:id', (req, res) => {
  res.status(200).json({ success: true, message: 'deleted successfully' });
});

export default taskRouter;
