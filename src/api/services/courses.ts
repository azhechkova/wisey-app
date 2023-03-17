import { AxiosResponse } from 'axios';
import client from '../client';

export const getCourses = (): Promise<AxiosResponse> => {
  return client.get('/core/preview-courses');
};

export const getCourse = (id: string): Promise<AxiosResponse> => {
  return client.get(`/core/preview-courses/${id}`);
};
