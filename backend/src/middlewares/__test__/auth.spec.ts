import { authMiddleware } from '../auth';
import AuthService from '../../services/auth';

describe('Auth Middleware', () => {
  it('Should verify a JWT token', async () => {
    const jwtToken = AuthService.generateToken('fake-user-id', 'fake-user-email');
    const reqFake = {
      headers: {
        authorization: jwtToken
      }
    }
    const resFake = {};
    const nextFake = jest.fn();
    authMiddleware(reqFake, resFake, nextFake);
    expect(nextFake).not.toHaveBeenCalled();
  })
});