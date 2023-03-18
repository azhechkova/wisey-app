import React from 'react';

import { Box, Typography } from '@mui/material';

import { LessonType } from '~/types';
import CourseVideo from '~/components/UI/Atoms/CourseVideo';
import { LESSON_STATUS } from '~/constants';
import LockedVideo from '~/components/UI/Atoms/LockedVideo';
import useStyles from './styles';

interface LessonProps {
  lesson: LessonType | null;
  previewVideo?: string;
}

const Lesson = ({ lesson, previewVideo }: LessonProps): JSX.Element => {
  const { classes } = useStyles();

  return lesson ? (
    <Box>
      <Typography component="h1" variant="h5" marginBottom={2}>
        {lesson.title}
      </Typography>
      <Box className={classes.videoWrap}>
        {lesson.status === LESSON_STATUS.locked ? (
          <LockedVideo />
        ) : (
          <CourseVideo controls src={lesson?.link} className={classes.video} />
        )}
      </Box>
    </Box>
  ) : (
    <Box>
      <Typography component="h1" variant="h5" marginBottom={2}>
        Course preview
      </Typography>
      <CourseVideo controls src={previewVideo} className={classes.video} />
    </Box>
  );
};

export default Lesson;
