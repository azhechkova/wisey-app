import React from 'react';
import { Typography } from '@mui/material';
import { AxiosError } from 'axios';

import { CourseList, Loading, Error } from '~/components';
import MainLayout from '~/layouts/MainLayout';

import { CourseType } from '~/types';
import useCourses from '~/hooks/useCourses';

import useStyles from './styles';

const PreviewCourses = (): JSX.Element => {
  const { classes } = useStyles();
  const { data, loading, error } = useCourses<CourseType>();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    const typedError = error as Error | AxiosError | null;

    return <Error message={typedError?.message || ''} />;
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
