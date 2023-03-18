import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Box, Button, Typography, List, ListItem } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { AxiosError } from 'axios';

import { setActiveLesson } from '~/store/reducers/app';
import useCourse from '~/hooks/useCourse';
import { CourseType } from '~/types';

import { Loading, LessonNavigation, Lesson, Error } from '~/components';
import MainLayout from '~/layouts/MainLayout';

import useStyles from './styles';

const PreviewCourse = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const { data, loading, error } = useCourse<CourseType>(id);
  const dispatch = useDispatch();

  const activeLesson = useMemo(
    () => searchParams.get('lesson') || data?.lessons?.[0]?.id,
    [searchParams, data],
  );

  const activeLessonObj = useMemo(() => {
    if (!data) return null;
    const lesson = data.lessons?.find(item => item.id === activeLesson);

    if (!lesson) return data?.lessons?.[0];

    return lesson;
  }, [data, activeLesson]);

  const navigate = useNavigate();
  const { classes } = useStyles();

  const onBack = (): void => {
    navigate('/courses');
  };

  const onLessonChange = (lessonId: string): void => {
    if (!data) return;
    setSearchParams({ lesson: lessonId }, { replace: true });
  };

  useEffect(() => {
    if (!activeLesson) return;
    dispatch(setActiveLesson(activeLesson));
  }, [activeLesson, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(setActiveLesson(''));
    };
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    const typedError = error as Error | AxiosError | null;

    return <Error message={typedError?.message || ''} />;
  }

  return (
    <MainLayout>
      <Box component="header" className={classes.header}>
        {data && (
          <LessonNavigation
            lessons={data.lessons}
            onLessonChange={onLessonChange}
          />
        )}
        <Button onClick={onBack}>
          <ArrowBack />
          Back
        </Button>
      </Box>
      {data && (
        <>
          <Box component="section">
            <Box>
              {activeLessonObj && (
                <>
                  <Typography className={classes.courseName}>
                    Course: {data.title}
                  </Typography>
                  <Lesson lesson={activeLessonObj} />
                </>
              )}
            </Box>
          </Box>
          <Box component="section">
            <Typography
              marginTop={4}
              marginBottom={2}
              variant="h5"
              component="h3"
              fontWeight={600}
            >
              Course description
            </Typography>
            <Typography>{data.description}</Typography>
            {data?.meta?.skills && (
              <>
                <Typography
                  marginTop={4}
                  marginBottom={2}
                  variant="h5"
                  component="h3"
                  fontWeight={600}
                >
                  Skills
                </Typography>
                <List>
                  {data?.meta?.skills?.map((skill, i) => (
                    <ListItem key={skill}>
                      <Typography>
                        {i + 1}. {skill}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </>
            )}
          </Box>
        </>
      )}
    </MainLayout>
  );
};

export default PreviewCourse;
