import * as storageUtils from '../tokenLocalStorage';
import { PROJECT_NAME } from '../../constants';

describe('setStorageToken util', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should call setItem function', () => {
    const id = '1';

    storageUtils.setStorageToken(id);

    expect(localStorage.setItem).toHaveBeenCalledWith(PROJECT_NAME, id);
  });

  test('should add item to localStorage', () => {
    const id = '1';

    storageUtils.setStorageToken(id);

    expect(localStorage.__STORE__[PROJECT_NAME]).toEqual(id);
  });

  test('should keep latest updates in localStorage', () => {
    const id = '1';
    const nextId = '2';

    storageUtils.setStorageToken(id);
    storageUtils.setStorageToken(nextId);

    expect(localStorage.__STORE__[PROJECT_NAME]).toEqual(nextId);
  });
});

describe('getStorageToken util', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should return id', () => {
    const id = '1';

    localStorage.setItem(PROJECT_NAME, id);

    expect(storageUtils.getStorageToken()).toEqual(id);
  });

  test('should return undefined', () => {
    const id = '1';

    localStorage.setItem(PROJECT_NAME, id);
    localStorage.clear();

    expect(localStorage.__STORE__[PROJECT_NAME]).toBeUndefined();
  });

  test('should return correct id', () => {
    const id = '1';
    const nextId = '2';

    localStorage.setItem(PROJECT_NAME, id);
    localStorage.setItem(PROJECT_NAME, nextId);

    expect(storageUtils.getStorageToken()).toEqual(nextId);
  });
});

describe('removeToken util', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should remove token', () => {
    const id = '1';

    localStorage.setItem(PROJECT_NAME, id);
    storageUtils.removeStorageToken();

    expect(localStorage.__STORE__[PROJECT_NAME]).toBeUndefined();
  });
});
