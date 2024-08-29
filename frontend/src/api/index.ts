import axios from 'axios';

if (!process.env.REACT_APP_API_BASEURL)
  throw new Error('DOTENV axios BASEURL undefined');

export const Api = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL as string,
});
