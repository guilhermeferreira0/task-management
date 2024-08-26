import { type Request, type Response } from 'express';
import { Task } from '../models/taskModel';
import { User } from '../models/userModel';
import { ProgressTaskProps } from '../types/taskType';

// adding fk task
Task.belongsTo(User);

export class TaskController {

  // get all tasks for database
  async getAllTasks(req: Request, res: Response) {
    const { id } = req.body.user; 
    try {
      const tasks = await Task.findAll({ where: { user_id: id } });
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
    const { id } = req.body.user;
    try {
      const taskExisting = await Task.findOne({ where: { id: taskId, user_id: id } });
      if (!taskExisting) {
        return res
          .status(406)
          .json({ success: false, message: 'Task undefined' });
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
    const { title, description, progress } = req.body;
    const { id } = req.body.user;
    if (!title || !description || !progress) {
      return res
        .status(406)
        .json({ success: false, message: 'Error invalid fields' });
    }
    try {
      const newTask = await Task.create({ title, description, progress, user_id: id});
      return res.status(201).json({ success: true, data: newTask });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, message: 'Failed register task' });
    }
  }

  // delete specific user for id
  async delete(req: Request, res: Response) {
    const taskId = req.params.id;
    const { id } = req.body.user;
    try {
      const taskExisting = await Task.findOne({ where: { id: taskId, user_id: id } });
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
        .json({ success: false, message: 'Failed delete' });
    }
  }

  // update specific task for id
  async update(req: Request, res: Response) {
    const taskId = req.params.id;
    const { title, description, progress } = req.body;
    const { id } = req.body.user;
    try {
      const taskExisting = await Task.findOne({ where: { id: taskId, user_id: id } });
      if (!taskExisting) {
        return res
          .status(406)
          .json({ success: false, message: 'task is undefined' });
      }
      const taskUpdated = await taskExisting.update({ title, description, progress, user_id: id });
      return res.status(200).json({ success: true, data: taskUpdated });
      } catch (error) {
        return res
          .status(400)
          .json({ success: false, message: 'Failed update task' });
    }
  }

  // takes task specifying progress
  async getTaskSpecifyingProgress(req: Request, res: Response) {
    const { id } = req.body.user;
    const progress: ProgressTaskProps = req.body.progress;
    if (!progress) {
      return res.status(400).json({ success: false, message: 'Failed progress specified undefined' });
    } 
    try {
      const taskExisting = await Task.findAll({ where: { user_id: id, progress: progress } });
      if (!taskExisting) {
        return res
          .status(406)
          .json({ success: false, message: 'tasks is undefined' });
      }
      return res.status(200).json({ success: true, data: taskExisting });
      } catch (error) {
        return res
          .status(400)
          .json({ success: false, message: 'Failed get tasks' });
    }
  }
}
