import axios from 'axios';
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
  error => {
    return Promise.reject(error);
  },
);

export default client;
