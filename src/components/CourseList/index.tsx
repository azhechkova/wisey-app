import { Box } from '@mui/material';
import React from 'react';

import useStyles from './styles';
import { CourseType } from '../../types';
import { Course } from '..';

interface CourseListProps {
  courses: CourseType[];
}

const CourseList = ({ courses }: CourseListProps): JSX.Element => {
  const { classes } = useStyles();

  return (
    <Box className={classes.list}>
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </Box>
  );
};

export default CourseList;
