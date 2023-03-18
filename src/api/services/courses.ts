import { AxiosResponse } from 'axios';
import privateClient from '../private';

export const getCourses = (): Promise<AxiosResponse> => {
  return privateClient.get('/core/preview-courses');
};

export const getCourse = (id: string): Promise<AxiosResponse> => {
  return privateClient.get(`/core/preview-courses/${id}`);
};
