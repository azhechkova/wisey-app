import { AxiosResponse } from 'axios';
import { getStorageToken } from '../../utils/tokenLocalStorage';
import client from '../client';

const getCourses = (): Promise<AxiosResponse> => {
  const token = getStorageToken();

  return client.get('/core/preview-courses?limit=2', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default getCourses;
