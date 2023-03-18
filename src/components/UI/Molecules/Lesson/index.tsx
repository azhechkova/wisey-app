import React from 'react';

import { Box, Typography } from '@mui/material';

import { LessonType } from '~/types';
import { LESSON_STATUS } from '~/constants';
import LockedVideo from '~/components/UI/Atoms/LockedVideo';

import useStyles from './styles';
import LessonVideo from '../LessonVideo';

interface LessonProps {
  lesson: LessonType;
  previewVideo?: string;
}

const Lesson = ({ lesson, previewVideo }: LessonProps): JSX.Element => {
  const { classes } = useStyles();

  const videoSrc = lesson ? lesson?.link : previewVideo;

  return (
    <Box>
      <Typography component="h1" variant="h5" marginBottom={2}>
        {lesson ? lesson.title : 'Course preview'}
      </Typography>
      <Box className={classes.videoWrap}>
        {lesson?.status === LESSON_STATUS.locked ? (
          <LockedVideo />
        ) : (
          <LessonVideo src={videoSrc} duration={lesson.duration} />
        )}
      </Box>
    </Box>
  );
};

export default Lesson;
