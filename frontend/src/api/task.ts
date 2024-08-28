import { Api } from '.';
import { getCookie } from '../services/cookies';
import { IFormTaskInput } from '../types/taskProps';

export async function getAllTasks() {
  const response = await Api.get('/task', {
    headers: {
      Authorization: getCookie(),
    },
  });
  return response.data;
}

export async function registerTaskRequest(data: IFormTaskInput) {
  const response = await Api.post('/task/register', data, {
    headers: {
      Authorization: getCookie(),
    },
  });
  return response.data;
}

export async function updateTaskRequest(data: IFormTaskInput, id: string) {
  const response = await Api.put(`/task/update/${id}`, data, {
    headers: {
      Authorization: getCookie(),
    },
  });
  return response.data;
}

export async function deleteTaskRequest(id: string) {
  const response = await Api.delete(`/task/delete/${id}`, {
    headers: {
      Authorization: getCookie(),
    },
  });
  return response.data;
}
