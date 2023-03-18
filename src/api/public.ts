import axios from 'axios';
import { baseURL } from '../constants';

const publicClient = axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default publicClient;
