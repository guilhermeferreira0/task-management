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
import { toast } from 'sonner';

export function useHookUser() {
  const { setUserContext } = useAuth();
  const [loading, setLoading] = useState(false);

  const loginUser = async (user: UserProps) => {
    setLoading(true);
    try {
      const response = await loginRequest(user);
      if (!response) throw new Error('Server Error');
      setUserContext(response.data, response.token);
      toast.success('Login Successful');
    } catch (e: any) {
      toast.error(e.response.data.message);
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
      toast.success('Registered user');
    } catch (e: any) {
      toast.error(e.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async () => {
    setLoading(true);
    try {
      await userDeleteRequest();
      toast.success('User Deleted');
    } catch (e: any) {
      toast.error(e.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  async function updateUser(user: UserProps) {
    setLoading(true);
    try {
      await userUpdateRequest(user);
      toast.success('Updated user');
      setUserContext(user);
    } catch (e: any) {
      toast.error(e.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  return { updateUser, deleteUser, registerUser, loading, loginUser };
}
