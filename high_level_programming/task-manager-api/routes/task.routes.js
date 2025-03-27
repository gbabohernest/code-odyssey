import { Router } from 'express';
import {
  createTask,
  getAllTask,
  getSingleTask,
  updateTask,
  deleteTask,
} from '../controllers/task-controller.js';
const taskRouter = Router();

taskRouter
  .route('/')
  .get(await getAllTask)
  .post(await createTask);

taskRouter
  .route('/:id')
  .get(await getSingleTask)
  .put(await updateTask)
  .delete(await deleteTask);

export default taskRouter;
