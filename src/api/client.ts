import axios from 'axios';

const HOST = process.env.REACT_APP_API_HOST;
const VERSION = process.env.REACT_APP_API_VERSION;
const baseURL = `${HOST}/${VERSION}`;

const client = axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default client;
