import { Button, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import useStyles from './styles';
import { CourseList } from '../../components';
import MainLayout from '../../layouts/MainLayout';

import { CourseType } from '../../types';
import getCourses from '../../api/services/courses';

export const coursesLoader = async (): Promise<CourseType[]> => {
  const { data } = await getCourses();

  return data.courses || [];
};

const COURSES_PER_PAGE = 10;

const PreviewCourses = (): JSX.Element => {
  const { classes } = useStyles();
  const [limit, setLimit] = useState(COURSES_PER_PAGE);
  const courses = useLoaderData() as CourseType[];

  const onShowMore = (): void => {
    setLimit(prev => prev + COURSES_PER_PAGE);
  };

  const filteredList = useMemo(
    () => (courses ? courses.slice(0, limit) : []),
    [limit, courses],
  );

  return (
    <MainLayout>
      <Typography component="h1" variant="h3" className={classes.title}>
        Explore Courses
      </Typography>
      <CourseList courses={filteredList as CourseType[]} />
      {limit < courses?.length && (
        <Button onClick={onShowMore}>Show more</Button>
      )}
    </MainLayout>
  );
};

export default PreviewCourses;
