import axios from 'axios';

const API_URL = 'https://api.github.com';
const DJANGO_URL = 'http://localhost:8000';

export const https = axios.create({
  baseURL: API_URL, // Not adding authorization bc app will only look for public repos
});

const responseData = ({ data }: any) => {
  return data;
};

export const httpDjango = axios.create({
  baseURL: DJANGO_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

https.interceptors.response.use(responseData, ({ response }) => {
  return Promise.reject(response);
});

httpDjango.interceptors.response.use(responseData, ({ response }) => {
  return Promise.reject(response);
});
