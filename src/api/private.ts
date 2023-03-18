import axios from 'axios';
import getToken from './services/token';
import { getStorageToken } from '../utils/tokenLocalStorage';

const HOST = process.env.REACT_APP_API_HOST;
const VERSION = process.env.REACT_APP_API_VERSION;
const baseURL = `${HOST}/${VERSION}`;

const client = axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

client.interceptors.request.use(
  config => {
    const token = getStorageToken();

    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

client.interceptors.response.use(
  response => response,
  async error => {
    const config = error?.config;

    if (error?.response?.status === 401) {
      config.sent = true;

      const { data } = await getToken();

      if (data?.token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${data?.token}`,
        };
      }

      return axios(config);
    }

    return Promise.reject(error);
  },
);

export default client;
