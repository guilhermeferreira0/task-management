import { UserProps } from '../../types/userProps';

export function setUserLocalStorage(user: UserProps | null) {
  localStorage.setItem('ustj', JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('ustj');
  if (!json) {
    return null;
  }

  const user = JSON.parse(json);
  return user ?? null;
}
