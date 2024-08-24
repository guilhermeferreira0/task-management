import { Router } from 'express';
import { UserController } from '../controllers/userController';

export const userRouter = Router();
const user = new UserController();

userRouter.delete('/delete/:id', user.delete);
userRouter.put('/update/:id', user.update);
userRouter.post('/register', user.register);
userRouter.get('/:id', user.getUser);
userRouter.get('/', user.getAllUsers);
