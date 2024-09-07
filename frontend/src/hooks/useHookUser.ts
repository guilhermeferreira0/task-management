/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import {
  loginRequest,
  registerRequest,
  userDeleteRequest,
  userUpdateRequest,
} from '../api/user';
import { useAuth } from '../contexts/AuthContext/useAuth';
import { UserProps } from '../types/userProps';
import { notify } from '../components/Toasts/notify';

export function useHookUser() {
  const { setUserContext, logout } = useAuth();
  const [loading, setLoading] = useState(false);

  const loginUser = async (user: UserProps) => {
    setLoading(true);
    try {
      const response = await loginRequest(user);
      if (!response) throw new Error('Server Error');
      notify('success', 'Success!!!');
      setUserContext(response.data, response.token);
    } catch (e: any) {
      notify('warning', e.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (user: UserProps) => {
    setLoading(true);
    try {
      const response = await registerRequest(user);
      if (!response) throw new Error('Server error');
      setUserContext(user, response.token);
      notify('success', 'Register Success!!!');
    } catch (e: any) {
      notify('warning', e.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async () => {
    setLoading(true);
    try {
      await userDeleteRequest();
      logout();
      notify('warning', 'User Deleted');
    } catch (e: any) {
      notify('warning', e.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  async function updateUser(user: UserProps) {
    setLoading(true);
    try {
      await userUpdateRequest(user);
      notify('success', 'Updated Success!!!');
      setUserContext(user);
    } catch (e: any) {
      notify('warning', e.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  return { updateUser, deleteUser, registerUser, loading, loginUser };
}
