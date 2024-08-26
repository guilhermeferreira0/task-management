import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';

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

  static generateToken(id: string, email: string): string {
    return jwt.sign({ id, email }, SECRET_KEY, {
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