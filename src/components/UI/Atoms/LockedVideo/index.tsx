import React from 'react';
import { Box, Typography } from '@mui/material';
import { LockRounded } from '@mui/icons-material';

import useStyles from './styles';

const LockedVideo = (): JSX.Element => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <LockRounded className={classes.icon} />
        <Typography className={classes.text}>This video is locked</Typography>
      </Box>
    </Box>
  );
};

export default LockedVideo;
