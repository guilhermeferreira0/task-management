import { Router } from 'express';
import { TaskController } from '../controllers/taskController';

export const taskRouter = Router();
const task = new TaskController();

taskRouter.delete('/delete/:id', task.delete);
taskRouter.put('/update/:id', task.update);
taskRouter.post('/register', task.register);
taskRouter.get('/:id', task.getTask);
taskRouter.get('/', task.getAllTasks);
