import React, { useEffect } from 'react';
import { userDetailsRequest } from '../../api/user';
import { useAuth } from '../../contexts/AuthContext/useAuth';
import { setUserLocalStorage } from '../../contexts/AuthContext/util';
import { useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { logout, setUserLogged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function verifyUser() {
      try {
        const res = await userDetailsRequest();
        if (!res) {
          logout();
          navigate('/');
          return;
        }
        setUserLogged(res.data);
        setUserLocalStorage(res.data);
        return;
      } catch (e) {
        logout();
        navigate('/');
      }
    }
    verifyUser();

    return;
  }, []);

  return <>{children}</>;
}
