import React from 'react';

import { Box, Typography } from '@mui/material';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

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
      <WatchLaterIcon className={classes.icon} />
      <Typography className={classes.text}>{formatDuration}</Typography>
    </Box>
  );
};

export default Duration;
