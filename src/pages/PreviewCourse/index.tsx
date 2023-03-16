import { Box, Button, List, ListItem, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos';
import { getCourse } from '../../api/services/courses';
import { Loading } from '../../components';
import CourseVideo from '../../components/CourseVideo';
import Lesson from '../../components/Lesson';
import MainLayout from '../../layouts/MainLayout';
import { CourseType } from '../../types';

const PreviewCourse = (): JSX.Element => {
  const [course, setCourse] = useState<CourseType | null>();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const onBack = (): void => {
    navigate('/courses');
  };

  const fetchCourse = async (courseId: string): Promise<void> => {
    await getCourse(courseId).then(({ data }) => {
      setCourse(data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (!id) return;
    fetchCourse(id);
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <MainLayout>
      <Button onClick={onBack}>
        <ArrowBackIcon />
        Back
      </Button>
      {course && (
        <>
          <Typography component="h1" variant="h4" marginBottom={2}>
            {course.title}
          </Typography>
          <Typography component="h2" variant="h5" fontWeight={600}>
            Description
          </Typography>
          <Typography component="p" variant="body1" marginBottom={3}>
            {course.description}
          </Typography>
          <CourseVideo controls src={course?.meta?.courseVideoPreview?.link} />
          <Box component="section">
            <Typography
              component="h2"
              variant="h5"
              marginY={3}
              fontWeight={600}
            >
              Lessons
            </Typography>
            <List>
              {course.lessons.map(lesson => (
                <ListItem key={lesson.id}>
                  <Lesson lesson={lesson} />
                </ListItem>
              ))}
            </List>
          </Box>
        </>
      )}
    </MainLayout>
  );
};

export default PreviewCourse;
