import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import appSlice from './reducers/app';
import { loadState } from './utils';
import { RootState } from './types';

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    app: appSlice,
  },
  preloadedState,
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
