import { Router } from 'express';
import { UserController } from '../controllers/userController';

export const userRouter = Router();
const user = new UserController();

userRouter.delete('/update', user.delete);
userRouter.put('/update', user.update);
userRouter.post('/register', user.register);
userRouter.get('/', user.getAllUsers);
userRouter.get('/:id', user.getUser);
