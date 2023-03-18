import { Box } from '@mui/material';
import React, { useState, useMemo } from 'react';

import Button from '@mui/material/Button/Button';
import { CourseType } from '~/types';

import Course from '~/components/UI/Molecules/Course';
import useStyles from './styles';

interface CourseListProps {
  courses: CourseType[];
}

const COURSES_PER_PAGE = 10;

const CourseList = ({ courses }: CourseListProps): JSX.Element => {
  const { classes } = useStyles();
  const [limit, setLimit] = useState(COURSES_PER_PAGE);

  const onShowMore = (): void => {
    setLimit(prev => prev + COURSES_PER_PAGE);
  };

  const filteredList = useMemo(
    () => (courses ? courses.slice(0, limit) : []),
    [limit, courses],
  );

  return (
    <Box>
      <Box className={classes.list}>
        {filteredList.map(course => (
          <Course key={course.id} course={course} />
        ))}
      </Box>
      {limit < courses?.length && (
        <Button className={classes.button} onClick={onShowMore}>
          Show more
        </Button>
      )}
    </Box>
  );
};

export default CourseList;
