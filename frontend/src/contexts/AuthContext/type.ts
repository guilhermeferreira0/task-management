import { UserProps } from '../../types/userProps';

export interface AuthProps {
  authenticate: (user: UserProps) => Promise<boolean>;
  registerUser: (user: UserProps) => Promise<boolean>;
  verifyUserToken: () => Promise<boolean>;
}
