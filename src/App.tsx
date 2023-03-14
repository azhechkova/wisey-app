import {
  CssBaseline,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './router';
import theme from './theme';

function App() {
  return (
    <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </>
  );
}

export default App;
