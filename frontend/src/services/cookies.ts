import Cookies from 'universal-cookie';

const cookies = new Cookies();

export function getCookie() {
  return cookies.get('jwt_authorization');
}

export function setCookie(token: string) {
  cookies.set('jwt_authorization', token);
}
