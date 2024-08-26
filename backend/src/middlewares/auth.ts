import { NextFunction, type Request, type Response } from "express";
import { authenticateToken } from "../utils/token";

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization'];
  if (!token) return res.status(406).json({success: false, message: 'Not Authorized Login Again'});

  try {
    const decoded = authenticateToken(token as string);
    console.log(decoded);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
    req.body.user = decoded;
    next();
  } catch(error) {
    return res.status(407).json({success: false, message: 'Error login, please try again'});
  }
}