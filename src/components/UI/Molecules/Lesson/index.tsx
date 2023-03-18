import React, { SyntheticEvent } from 'react';

import { Box, Typography } from '@mui/material';

import { LessonType } from '~/types';
import CourseVideo from '~/components/UI/Atoms/CourseVideo';
import { LESSON_STATUS } from '~/constants';
import LockedVideo from '~/components/UI/Atoms/LockedVideo';
import { useAppDispatch } from '~/store';
import { updateVideoProgress } from '~/store/reducers/app';
import {
  trackVideoProgress,
  getVideoProgress,
} from '~/utils/trackVideoProgress';
import useStyles from './styles';

interface LessonProps {
  lesson: LessonType;
  previewVideo?: string;
}

const Lesson = ({ lesson, previewVideo }: LessonProps): JSX.Element => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();

  const videoSrc = lesson ? lesson?.link : previewVideo;

  const videoProgress = getVideoProgress(videoSrc || '');

  const onTimeUpdate = (event: SyntheticEvent<HTMLVideoElement>): void => {
    if (videoProgress?.isFinished) return;
    const target = event.target as HTMLVideoElement;
    const progress = target.currentTime;
    const isFinished = Math.round(progress) >= lesson.duration;

    const progressItem = {
      videoId: videoSrc || '',
      progress,
      isFinished,
    };

    dispatch(updateVideoProgress(progressItem));
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
            onTimeUpdate={onTimeUpdate}
            controls
            src={videoSrc}
            currentTime={videoProgress?.progress || 0}
            className={classes.video}
          />
        )}
      </Box>
    </Box>
  );
};

export default Lesson;
