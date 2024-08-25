import jwt, { JwtPayload } from 'jsonwebtoken';
import 'dotenv/config';

interface JwtProps extends JwtPayload {
  id: string
}

const SECRET_KEY = process.env.JWT_SECRET as string || 'testsecret';

export function signToken(id: string, email: string) {
  return jwt.sign({ id, email }, SECRET_KEY, {
      expiresIn: '1h'
  });
}

export function authenticateToken(token: string) {
  return jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) throw new Error('Token invalid!');
    return user;
  });
}