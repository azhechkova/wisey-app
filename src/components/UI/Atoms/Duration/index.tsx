import React from 'react';

import { Box, Typography } from '@mui/material';
import { WatchLater } from '@mui/icons-material';

import getLessonDuration from '~/utils/getLessonDuration';

import useStyles from './styles';

interface DurationProps {
  duration: number;
}

const Duration = ({ duration }: DurationProps): JSX.Element => {
  const formatDuration = getLessonDuration(duration);
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <WatchLater className={classes.icon} />
      <Typography className={classes.text}>{formatDuration}</Typography>
    </Box>
  );
};

export default Duration;
