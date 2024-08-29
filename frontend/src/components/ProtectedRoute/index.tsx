import React, { useCallback, useEffect, useState } from 'react';
import { userDetailsRequest } from '../../api/user';
import { useAuth } from '../../contexts/AuthContext/useAuth';
import { setUserLocalStorage } from '../../contexts/AuthContext/util';
import { useNavigate } from 'react-router-dom';
import { notify } from '../Toasts/notify';

interface ProtectedRouteProps {
  children: JSX.Element;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isLogged, setIsLogged] = useState(false);
  const { logout, setUserLogged } = useAuth();
  const navigate = useNavigate();
  const verifyUser = useCallback(async () => {
    try {
      const res = await userDetailsRequest();
      if (!res) {
        logout();
        navigate('/');
        return;
      }
      setUserLogged(res.data);
      setUserLocalStorage(res.data);
      setIsLogged(true);
      return;
    } catch (error) {
      logout();
      notify('warning', 'You are not authorized to access this page!!!');
      navigate('/');
    }
  }, [isLogged]);

  useEffect(() => {
    verifyUser();

    return;
  }, []);

  return <>{isLogged && children}</>;
}
