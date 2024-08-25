import { NextFunction, type Request, type Response } from 'express';
import { User } from '../models/userModel';
import { Task } from '../models/taskModel';
import { hashPassword } from '../utils/hash';

// adding task key for user
User.hasMany(Task, { foreignKey: 'user_id' });

export class UserController {
  // get all users for database
  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await User.findAll();
      return res.status(200).json({ success: true, data: users });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, message: 'Failed getAllUsers' });
    }
  }

  // get specific user for id
  async getUser(req: Request, res: Response) {
    const userId = req.params.id;
    try {
      const userExisting = await User.findByPk(userId, {
        include: {
          model: Task,
        }
      });
      if (!userExisting) {
        return res
          .status(406)
          .json({ success: false, message: 'User is undefined' });
      }
      return res.status(200).json({ success: true, data: userExisting });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, message: 'Failed getUser' });
    }
  }

  // register new user
  async register(req: Request, res: Response) {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res
        .status(406)
        .json({ success: false, message: 'Email or password Undefined' });
    }
    try {
      const hashedPassword = await hashPassword(password);
      const newUser = await User.create({ username, email, password: hashedPassword });
      return res.status(201).json({ success: true, data: newUser });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, message: 'Failed register user' });
    }
  }

  // delete specific user for id
  async delete(req: Request, res: Response) {
    const userId = req.params.id;
    try {
      const userExisting = await User.findByPk(userId);
      if (!userExisting) {
        return res
          .status(406)
          .json({ success: false, message: 'User is undefined' });
      }
      await userExisting.destroy();
      return res.status(200).json({ success: true, message: 'User deleted' });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, message: 'Failed getUser' });
    }
  }

  // update specific user for id
  async update(req: Request, res: Response) {
    const userId = req.params.id;
    const { username, email, password } = req.body;
    try {
      const userExisting = await User.findByPk(userId);
      if (!userExisting) {
        return res
          .status(406)
          .json({ success: false, message: 'User is undefined' });
      }
      const userUpdated = await userExisting.update({ username, email, password });
      return res.status(200).json({ success: true, data: userUpdated });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, message: 'Failed getUser' });
    }
  }
}
