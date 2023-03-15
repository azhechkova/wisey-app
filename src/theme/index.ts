import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2EC4B6',
      light: '#9FEBE3',
      dark: '#1DC4B3',
    },
    secondary: {
      main: '#9FEBE3',
    },
    error: {
      main: '#E71D36',
    },
    warning: {
      main: '#FF9F1C',
    },
    text: {
      primary: '#011627',
    },
  },
});

export default theme;
