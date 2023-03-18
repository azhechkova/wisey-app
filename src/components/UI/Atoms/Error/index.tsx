import React from 'react';
import { Box, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import useStyles from './styles';

interface ErrorProps {
  message: string;
}

const Error = ({ message }: ErrorProps): JSX.Element => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <ErrorOutlineIcon className={classes.icon} />
      <Typography>Ooops...</Typography>
      <Typography>{message}</Typography>
    </Box>
  );
};

export default Error;
