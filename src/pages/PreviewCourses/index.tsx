import { Typography } from '@mui/material';
import React from 'react';

import { useLoaderData } from 'react-router-dom';
import useStyles from './styles';
import { CourseList, Loading } from '../../components';
import MainLayout from '../../layouts/MainLayout';

import { CourseType } from '../../types';
import { getCourses } from '../../api/services/courses';

export const coursesLoader = async (): Promise<CourseType[]> => {
  const { data } = await getCourses();

  return data.courses || [];
};

const PreviewCourses = (): JSX.Element => {
  const { classes } = useStyles();
  const courses = useLoaderData() as CourseType[];

  if (!courses) {
    return <Loading />;
  }

  return (
    <MainLayout>
      <Typography component="h1" variant="h3" className={classes.title}>
        Explore Courses
      </Typography>
      <CourseList courses={courses as CourseType[]} />
    </MainLayout>
  );
};

export default PreviewCourses;
