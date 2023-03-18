import React from 'react';
import { Typography } from '@mui/material';

import useStyles from './styles';
import { CourseList, Loading } from '../../components';
import MainLayout from '../../layouts/MainLayout';

import { CourseType } from '../../types';
import useCourses from '../../hooks/useCourses';

const PreviewCourses = (): JSX.Element => {
  const { classes } = useStyles();
  const { data, loading } = useCourses<CourseType>();

  if (loading) {
    return <Loading />;
  }

  return (
    <MainLayout>
      <Typography component="h1" variant="h3" className={classes.title}>
        Explore Courses
      </Typography>
      <CourseList courses={data as CourseType[]} />
    </MainLayout>
  );
};

export default PreviewCourses;
