/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import {
  deleteTaskRequest,
  registerTaskRequest,
  updateTaskRequest,
} from '../api/task';
import { IFormTaskInput } from '../types/taskProps';
import { notify } from '../components/Toasts/notify';

export function useHookTask() {
  const [loading, setLoading] = useState(false);

  async function registerTask(data: IFormTaskInput) {
    setLoading(true);
    try {
      const response = await registerTaskRequest(data);
      if (!response) throw new Error('Server Error');
    } catch (e: any) {
      notify('warning', e.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateTask(data: IFormTaskInput, id: string) {
    setLoading(true);
    try {
      const response = await updateTaskRequest(data, id);
      if (!response) {
        throw new Error('Server error');
      }
    } catch (e: any) {
      notify('warning', e.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  async function deleteTask(id: string) {
    setLoading(true);
    try {
      const response = await deleteTaskRequest(id);
      if (!response) throw new Error('Server Error');
    } catch (e: any) {
      notify('warning', e.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  return { registerTask, updateTask, deleteTask, loading };
}
