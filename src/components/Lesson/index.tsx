import React from 'react';
import { Box, Typography } from '@mui/material';
import { LessonType } from '../../types';

interface LessonProps {
  lesson: LessonType;
}

const Lesson = ({ lesson }: LessonProps): JSX.Element => {
  return (
    <Box>
      <Typography>{lesson.title}</Typography>
    </Box>
  );
};

export default Lesson;
