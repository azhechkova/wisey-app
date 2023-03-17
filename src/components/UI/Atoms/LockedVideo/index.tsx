import React from 'react';
import { Box, Typography } from '@mui/material';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import useStyles from './styles';

const LockedVideo = (): JSX.Element => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <LockRoundedIcon className={classes.icon} />
        <Typography className={classes.text}>This video is locked</Typography>
      </Box>
    </Box>
  );
};

export default LockedVideo;
