import { NextFunction, Request, Response } from "express";
import AuthService from "../services/auth";

export async function authMiddleware(req: Partial<Request>, res: Partial<Response>, next: NextFunction) {
  const token = req.headers?.['authorization'];
  try {
    const decoded = AuthService.decodeToken(token as string);
    if (!decoded) {
      return res.status?.(406).json({success: false, message: 'Not Authorized Login Again'});
    }

    res.cookie?.("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
    req.body.user = decoded;
    next();
  } catch(error) {
    return res.status?.(401).json({success: false, message: 'Error login, please try again'});
  }
}