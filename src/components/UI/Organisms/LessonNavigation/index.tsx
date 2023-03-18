import React, { useMemo } from 'react';
import { Box, Typography, ListItem, List } from '@mui/material';
import { LessonType } from '~/types';
import LessonPreview from '~/components/UI/Molecules/LessonPreview';

import { useAppSelector } from '~/store';
import { getActiveLesson, getVideoProgress } from '~/store/utils';
import useStyles from './styles';

interface LessonNavigationProps {
  lessons: LessonType[];
  onLessonChange: (lessonId: string) => void;
}

const LessonNavigation = ({
  lessons,
  onLessonChange,
}: LessonNavigationProps): JSX.Element => {
  const { classes } = useStyles();
  const activeLesson = useAppSelector(getActiveLesson);
  const videoProgress = useAppSelector(getVideoProgress);

  const sortedLessons = useMemo(() => {
    return lessons.sort((a, b) => a.order - b.order);
  }, [lessons]);

  const getIsFinished = (lessonId: string): boolean => {
    const videoObj = videoProgress?.find(video => video.videoId === lessonId);

    if (!videoObj) return false;

    return videoObj.isFinished;
  };

  return (
    <Box component="aside" className={classes.root}>
      <Typography component="h2" variant="h5" marginBottom={3} fontWeight={600}>
        Lessons
      </Typography>
      <List>
        {sortedLessons.map(lesson => (
          <ListItem key={lesson.id}>
            <LessonPreview
              state={{
                isActive: activeLesson === lesson.id,
                isFinished: getIsFinished(lesson.link),
              }}
              lesson={lesson}
              onLessonChange={onLessonChange}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default LessonNavigation;
