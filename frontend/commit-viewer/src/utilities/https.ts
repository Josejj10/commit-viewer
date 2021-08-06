import axios from 'axios';

const API_URL = 'https://api.github.com';

export const https = axios.create({
  baseURL: API_URL,
});

const responseData = ({ data }: any) => {
  return data;
};

https.interceptors.response.use(responseData, ({ response }) => {
  return Promise.reject(response);
});
