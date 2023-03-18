import React, { SyntheticEvent, useMemo } from 'react';

import { Box, Typography } from '@mui/material';

import useStyles from './styles';
import { LessonType } from '../../../../types';
import CourseVideo from '../../Atoms/CourseVideo';
import { LESSON_STATUS } from '../../../../constants';
import LockedVideo from '../../Atoms/LockedVideo';
import {
  trackVideoProgress,
  getVideoProgress,
} from '../../../../utils/trackVideoProgress';

interface LessonProps {
  lesson: LessonType;
  previewVideo?: string;
}

const Lesson = ({ lesson, previewVideo }: LessonProps): JSX.Element => {
  const { classes } = useStyles();

  const videoSrc = lesson ? lesson?.link : previewVideo;

  const videoProgress = useMemo(() => {
    return getVideoProgress(videoSrc || '');
  }, [videoSrc]);

  const onProgress = (event: SyntheticEvent<HTMLVideoElement>): void => {
    if (videoProgress.isFinished) return;
    const target = event.target as HTMLVideoElement;
    const progress = target.currentTime;
    const isFinished = Math.round(progress) >= lesson.duration;

    const progressItem = {
      videoId: videoSrc || '',
      progress,
      isFinished,
    };

    trackVideoProgress(progressItem);
  };

  return (
    <Box>
      <Typography component="h1" variant="h5" marginBottom={2}>
        {lesson ? lesson.title : 'Course preview'}
      </Typography>
      <Box className={classes.videoWrap}>
        {lesson?.status === LESSON_STATUS.locked ? (
          <LockedVideo />
        ) : (
          <CourseVideo
            onProgress={onProgress}
            controls
            src={videoSrc}
            currentTime={videoProgress.progress}
            className={classes.video}
          />
        )}
      </Box>
    </Box>
  );
};

export default Lesson;
