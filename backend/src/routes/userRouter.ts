import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { authMiddleware } from '../middlewares/auth';

export const userRouter = Router();
const user = new UserController();

userRouter.delete('/delete', authMiddleware, user.delete);
userRouter.put('/update', authMiddleware, user.update);
userRouter.get('/details', authMiddleware, user.getUser);
userRouter.post('/register', user.register);
userRouter.post('/login', user.loginUser);
