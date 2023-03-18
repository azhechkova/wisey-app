import React, { useMemo } from 'react';

import { Box } from '@mui/material';
import { Slideshow, LockOutlined } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import useStyles from './styles';
import { LessonType } from '../../../../types';
import Duration from '../../Atoms/Duration';
import { LESSON_STATUS } from '../../../../constants';
import { getVideoProgress } from '../../../../utils/trackVideoProgress';

interface LessonPreviewProps {
  lesson: LessonType;
  isActive?: boolean;
  onLessonChange: (lessonId: string) => void;
}

const LessonPreview = ({
  lesson,
  onLessonChange,
  isActive,
}: LessonPreviewProps): JSX.Element => {
  const videoSrc = lesson.link;

  const videoProgress = useMemo(() => {
    return getVideoProgress(videoSrc || '');
  }, [videoSrc]);
  const { isFinished } = videoProgress;

  console.log(videoProgress);
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
    </button>
  );
};

export default LessonPreview;
