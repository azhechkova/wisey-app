import React from 'react';
import { Box, Typography } from '@mui/material';
import { Slideshow, LockOutlined, Check } from '@mui/icons-material';

import { LessonType } from '~/types';
import { LESSON_STATUS } from '~/constants';

import Duration from '~/components/UI/Atoms/Duration';

import useStyles from './styles';

interface LessonPreviewProps {
  lesson: LessonType;
  onLessonChange: (lessonId: string) => void;
  state: {
    isActive?: boolean;
    isFinished?: boolean;
  };
}

const LessonPreview = ({
  lesson,
  onLessonChange,
  state: { isFinished, isActive },
}: LessonPreviewProps): JSX.Element => {
  const styleProps = {
    isLocked: lesson?.status === LESSON_STATUS.locked,
    isActive,
    isFinished,
  };
  const { classes } = useStyles(styleProps);

  const onClick = (): void => {
    onLessonChange(lesson.id);
  };

  return (
    <button
      aria-label="lesson button"
      onClick={onClick}
      type="button"
      className={classes.root}
    >
      <Box className={classes.icon}>
        {lesson.status === LESSON_STATUS.unlocked ? (
          <Slideshow />
        ) : (
          <LockOutlined />
        )}
      </Box>
      <Box className={classes.info}>
        <Typography
          className={classes.title}
          component="h4"
          variant="subtitle1"
        >
          {lesson.title}
        </Typography>
        <Duration duration={lesson.duration} />
      </Box>
      {isFinished && <Check className={classes.checkIcon} />}
    </button>
  );
};

export default LessonPreview;
