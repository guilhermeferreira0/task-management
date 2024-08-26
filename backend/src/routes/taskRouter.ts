import { Router } from 'express';
import { TaskController } from '../controllers/taskController';
import { authMiddleware } from '../middlewares/auth';

export const taskRouter = Router();
const task = new TaskController();

taskRouter.delete('/delete/:id', authMiddleware, task.delete);
taskRouter.put('/update/:id', authMiddleware, task.update);
taskRouter.post('/register', authMiddleware, task.register);
taskRouter.get('/:id', authMiddleware, task.getTask);
taskRouter.post('/', authMiddleware, task.getTaskSpecifyingProgress);
taskRouter.get('/', authMiddleware, task.getAllTasks);
