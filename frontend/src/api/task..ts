import { Api } from '.';
import { getCookie } from '../services/cookies';

export async function getAllTasks() {
  const response = await Api.get('/task', {
    headers: {
      Authorization: getCookie(),
    },
  });
  return response.data;
}
