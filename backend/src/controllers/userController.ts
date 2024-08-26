import { type Request, type Response } from 'express';
import { User } from '../models/userModel';
import { Task } from '../models/taskModel';
import AuthService from '../services/auth';

// adding task key for user
User.hasMany(Task, { foreignKey: 'user_id' });

export class UserController {
  // get all users for database
  // async getAllUsers(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const users = await User.findAll();
  //     return res.status(200).json({ success: true, data: users });
  //   } catch (error) {
  //     return res
  //       .status(400)
  //       .json({ success: false, message: 'Failed getAllUsers' });
  //   }
  // }

  // get user authenticate
  async getUser(req: Request, res: Response) {
    const { id } = req.body.user;
    try {
      const userExisting = await User.findOne({ where: { id: id } });
      if (!userExisting) {
        return res
          .status(406)
          .json({ success: false, message: 'User is undefined' });
      }

      const { username, email } = userExisting;
      return res.status(200).json({ success: true, data: {username, email} });
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
      const hashedPassword = await AuthService.hashPassword(password);
      const newUser = await User.create({ username, email, password: hashedPassword });
      const token = AuthService.generateToken(newUser);
      return res.status(201).json({ success: true, token });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, message: 'Failed register user' });
    }
  }

  // delete specific user for id
  async delete(req: Request, res: Response) {
    const { id } = req.body.user;
    try {
      const userExisting = await User.findByPk(id);
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
        .json({ success: false, message: 'Failed delete user' });
    }
  }

  // update specific user authenticate
  async update(req: Request, res: Response) {
    const { id } = req.body.user;
    const { username, email, password } = req.body;
    try {
      const userExisting = await User.findByPk(id);
      if (!userExisting) {
        return res
          .status(406)
          .json({ success: false, message: 'User is undefined' });
      }
      const hashedPassword = await AuthService.hashPassword(password);
      userExisting.username = username;
      userExisting.email = email;
      userExisting.password = hashedPassword;
      await userExisting.update({ id: id });
      return res.status(200).json({ success: true, message: 'User updated' });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ success: false, message: 'Failed update user' });
    }
  }

  // login user
  async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(406)
        .json({ success: false, message: 'Email or password Undefined' });
    }
    try {
      const userExisting = await User.findOne({ where: { email: email } });
      if (!userExisting) return res.status(401).json({success: false, message: 'User doesn´t exists'});

      const isMatchPassword = await AuthService.comparePasswords(password, userExisting.password);
      if (!isMatchPassword) return res.status(401).json({success: false, message: 'Invalid credentials'});

      const token = AuthService.generateToken(userExisting);
      return res.status(202).json({success:true, token});
    } catch(error) {
      return res.status(401).json({success:false, message: 'Error Unauthorized'});
    }
  }
}
