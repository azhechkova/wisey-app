import { Box, Button, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos';
import useStyles from './styles';
import { Loading, LessonNavigation } from '../../components';
import { CourseType } from '../../types';
import Lesson from '../../components/UI/Molecules/Lesson';
import useCourse from '../../hooks/useCourse';

const PreviewCourse = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const { data, loading } = useCourse<CourseType>(id);

  const activeLesson = searchParams.get('lesson');

  const activeLessonObj = useMemo(() => {
    if (!data) return null;
    const lesson = data.lessons?.find(item => item.id === activeLesson);

    if (!lesson) return null;

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

  if (loading) {
    return <Loading />;
  }

  return (
    <Box component="main" className={classes.root}>
      <Button onClick={onBack}>
        <ArrowBackIcon />
        Back
      </Button>
      {data && (
        <>
          <Box className={classes.content} component="section">
            <LessonNavigation
              activeLesson={activeLesson}
              lessons={data.lessons}
              onLessonChange={onLessonChange}
            />
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
          </Box>
        </>
      )}
    </Box>
  );
};

export default PreviewCourse;
