import React from 'react';
import { Box, CircularProgress } from '@mui/material';

import useStyles from './styles';

const Loading = (): JSX.Element => {
  const { classes } = useStyles();

  return (
    <Box className={classes.loadingWrap}>
      <CircularProgress color="primary" size={100} />
    </Box>
  );
};

export default Loading;
