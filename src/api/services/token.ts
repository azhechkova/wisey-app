import { AxiosResponse } from 'axios';
import publicClient from '../public';

const getToken = (): Promise<AxiosResponse> => {
  return publicClient.get('/auth/anonymous?platform=subscriptions');
};

export default getToken;
