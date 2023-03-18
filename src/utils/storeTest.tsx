import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import {
  ToolkitStore,
  EnhancedStore,
} from '@reduxjs/toolkit/dist/configureStore';
import type { RootState } from '~/store/types';
import appReducer from '~/store/reducers/app';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: EnhancedStore<RootState>;
}

const initialState = {
  app: {
    activeLesson: '',
    videoProgress: [],
  },
};
const setupStore = (
  preloadedState?: PreloadedState<RootState>,
): ToolkitStore<RootState> => {
  return configureStore({
    reducer: { app: appReducer },
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof setupStore>;

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = initialState,
    store = configureStore({ reducer: { app: appReducer }, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
): any => {
  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
