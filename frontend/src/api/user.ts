import { Api } from '.';
import { getCookie } from '../services/cookies';
import { UserProps } from '../types/userProps';

export async function loginRequest(user: UserProps) {
  const response = await Api.post('/user/login', {
    email: user.email,
    password: user.password,
  });

  return response.data;
}

export async function registerRequest(user: UserProps) {
  const response = await Api.post('/user/register', {
    username: user.username,
    email: user.email,
    password: user.password,
  });

  return response.data;
}

export async function userDetailsRequest() {
  const response = await Api.get('/user/details', {
    headers: {
      Authorization: getCookie(),
    },
  });
  return response.data;
}

export async function userUpdateRequest(data: UserProps) {
  const response = await Api.put('/user/update', data, {
    headers: {
      Authorization: getCookie(),
    },
  });
  return response.data;
}

export async function userDeleteRequest() {
  const response = await Api.delete('/user/delete', {
    headers: {
      Authorization: getCookie(),
    },
  });
  return response.data;
}
