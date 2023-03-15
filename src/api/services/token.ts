import { AxiosResponse } from 'axios';
import client from '../client';

const getToken = (): Promise<AxiosResponse> => {
  return client.get('/auth/anonymous?platform=subscriptions');
};

export default getToken;
