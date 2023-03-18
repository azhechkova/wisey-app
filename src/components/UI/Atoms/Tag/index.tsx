import React from 'react';
import { Chip } from '@mui/material';

import useStyles from './styles';

interface TagProps {
  label: string;
}

const Tag = ({ label }: TagProps): JSX.Element => {
  const { classes } = useStyles();

  return <Chip label={label} className={classes.tag} />;
};

export default Tag;
