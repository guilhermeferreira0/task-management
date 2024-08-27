import { UserProps } from '../../types/userProps';

export interface AuthProps {
  authenticate: (user: UserProps) => Promise<void>;
  registerUser: (user: UserProps) => Promise<boolean>;
}
