import { Router } from 'express';
import { TaskController } from '../controllers/taskController';

export const taskRouter = Router();
const task = new TaskController();

taskRouter.delete('/delete', task.delete);
taskRouter.put('/update', task.update);
taskRouter.post('/insert', task.insert);
taskRouter.get('/:id', task.getTask);
taskRouter.get('/', task.getAllTasks);
