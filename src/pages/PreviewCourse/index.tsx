import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useCallback, useState, useMemo } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos';
import useStyles from './styles';
import { getCourse } from '../../api/services/courses';
import { Loading, LessonNavigation } from '../../components';
import { CourseType } from '../../types';
import Lesson from '../../components/UI/Molecules/Lesson';

const PreviewCourse = (): JSX.Element => {
  const [course, setCourse] = useState<CourseType | null>();
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const activeLesson = searchParams.get('lesson');

  const activeLessonObj = useMemo(() => {
    if (!course) return null;
    const lesson = course.lessons?.find(item => item.id === activeLesson);

    if (!lesson) return null;

    return lesson;
  }, [course, activeLesson]);

  const { id } = useParams();
  const navigate = useNavigate();
  const { classes } = useStyles();

  const onBack = (): void => {
    navigate('/courses');
  };

  const fetchCourse = useCallback(async (courseId: string): Promise<void> => {
    await getCourse(courseId).then(({ data }) => {
      setCourse(data);
      setIsLoading(false);
    });
  }, []);

  const onLessonChange = (lessonId: string): void => {
    if (!course) return;
    setSearchParams({ lesson: lessonId }, { replace: true });
  };

  useEffect(() => {
    if (!id) return;

    fetchCourse(id);
  }, [id, fetchCourse]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Box component="main" className={classes.root}>
      <Button onClick={onBack}>
        <ArrowBackIcon />
        Back
      </Button>
      {course && (
        <>
          <Box className={classes.content} component="section">
            <LessonNavigation
              activeLesson={activeLesson}
              lessons={course.lessons}
              onLessonChange={onLessonChange}
            />
            <Box>
              {activeLessonObj && (
                <>
                  <Typography className={classes.courseName}>
                    Course: {course.title}
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
            <Typography>{course.description}</Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default PreviewCourse;
