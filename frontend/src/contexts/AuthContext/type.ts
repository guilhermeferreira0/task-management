import { UserProps } from '../../types/userProps';

export interface AuthProps {
  authenticate: (user: UserProps) => Promise<boolean>;
  registerUser: (user: UserProps) => Promise<boolean>;
  logout: () => void;
  setUserLogged: (user: UserProps) => void;
  deleteUser: () => Promise<boolean>;
  updateUser: (user: UserProps) => Promise<boolean>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userLogged: any;
}
