import { UserProps } from '../../types/userProps';

export interface AuthProps {
  logout: () => void;
  setUserLogged: (user: UserProps) => void;
  setUserContext: (user: UserProps, token?: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userLogged: any;
}
