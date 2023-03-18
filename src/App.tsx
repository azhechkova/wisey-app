import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import router from './router';
import theme from './theme';

const App = (): JSX.Element => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <MainLayout>
          <RouterProvider router={router} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
