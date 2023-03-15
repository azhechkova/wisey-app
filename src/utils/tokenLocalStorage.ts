import constants from '../constants';

const setStorageToken = (token: string): void => {
  localStorage.setItem(constants.PROJECT_NAME, token);
};

const getStorageToken = (): string | null => {
  return localStorage.getItem(constants.PROJECT_NAME);
};

const removeStorageToken = (): void => {
  return localStorage.removeItem(constants.PROJECT_NAME);
};

export { setStorageToken, getStorageToken, removeStorageToken };
