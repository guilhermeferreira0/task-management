import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { User } from '../models/userModel';

const SECRET_KEY = process.env.JWT_SECRET as string || 'testsecret';

interface UserTokenProps extends JwtPayload{
  id: string;
  email: string;
}

export default class AuthService {
  static async hashPassword(
    password: string
  ): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  static async comparePasswords(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  static generateToken(user: User): string {
    return jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: '1h'
  });
  }

  static decodeToken(token: string) {
    return jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) throw new Error('Token invalid!');
      return user;
    }) as UserTokenProps | undefined;
  }
}