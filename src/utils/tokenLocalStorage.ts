import { PROJECT_NAME } from '../constants';

const setStorageToken = (token: string): void => {
  localStorage.setItem(PROJECT_NAME, token);
};

const getStorageToken = (): string | null => {
  return localStorage.getItem(PROJECT_NAME);
};

const removeStorageToken = (): void => {
  return localStorage.removeItem(PROJECT_NAME);
};

export { setStorageToken, getStorageToken, removeStorageToken };
