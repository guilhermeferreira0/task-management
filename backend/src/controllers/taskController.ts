import { NextFunction, type Request, type Response } from 'express';
import { Task } from '../models/taskModel';
import { User } from '../models/userModel';

// adding fk task
Task.belongsTo(User);

export class TaskController {

  // get all tasks for database
  async getAllTasks(req: Request, res: Response) {
    try {
      const tasks = await Task.findAll();
      return res.status(200).json({ success: true, data: tasks });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, message: 'Failed getAllTasks' });
    }
  }

  // get specific task for id
  async getTask(req: Request, res: Response) {
    const taskId = req.params.id;
    try {
      const taskExisting = await Task.findByPk(taskId);
      if (!taskExisting) {
        return res
          .status(406)
          .json({ success: false, message: 'User is undefined' });
      }
      return res.status(200).json({ success: true, data: taskExisting });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, message: 'Failed getTask' });
    }
  }

  // register new task
  async register(req: Request, res: Response) {
    const { title, description, progress, user_id } = req.body;
    console.log(progress);
    if (!title || !description || !progress || !user_id) {
      return res
        .status(406)
        .json({ success: false, message: 'Error invalid fields' });
    }
    try {
      const newTask = await Task.create({ title, description, progress, user_id});
      return res.status(201).json({ success: true, data: newTask });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, message: 'Failed getAllUsers' });
    }
  }

  // delete specific user for id
  async delete(req: Request, res: Response) {
    const taskId = req.params.id;
    try {
      const taskExisting = await Task.findByPk(taskId);
      if (!taskExisting) {
        return res
          .status(406)
          .json({ success: false, message: 'task is undefined' });
      }
      await taskExisting.destroy();
      return res.status(200).json({ success: true, message: 'task deleted' });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, message: 'Failed gettask' });
    }
  }

  // update specific task for id
  async update(req: Request, res: Response) {
    const taskId = req.params.id;
    const { title, description, progress, user_id } = req.body;
    try {
      const taskExisting = await Task.findByPk(taskId);
      if (!taskExisting) {
        return res
          .status(406)
          .json({ success: false, message: 'task is undefined' });
      }
      const taskUpdated = await taskExisting.update({ title, description, progress, user_id });
      return res.status(200).json({ success: true, data: taskUpdated });
      } catch (error) {
        return res
          .status(400)
          .json({ success: false, message: 'Failed getTask' });
    }
  }
}
