import React from 'react';
import { Box } from '@mui/material';

import useStyles from './styles';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root} component="main">
      <Box className={classes.content}>{children}</Box>
    </Box>
  );
};

export default MainLayout;
