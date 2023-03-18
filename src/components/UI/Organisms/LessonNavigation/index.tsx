import React, { useMemo, useRef, useState } from 'react';
import { Box, Typography, ListItem, List, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { LessonType } from '~/types';
import { getActiveLesson, getVideoProgress } from '~/store/utils';
import useClickOutside from '~/hooks/useClickOutside';
import { useAppSelector } from '~/store';

import LessonPreview from '~/components/UI/Molecules/LessonPreview';

import useStyles from './styles';

interface LessonNavigationProps {
  lessons: LessonType[];
  onLessonChange: (lessonId: string) => void;
}

const LessonNavigation = ({
  lessons,
  onLessonChange,
}: LessonNavigationProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const { classes } = useStyles({ isOpen });
  const ref = useRef(null);
  const activeLesson = useAppSelector(getActiveLesson);
  const videoProgress = useAppSelector(getVideoProgress);

  const sortedLessons = useMemo(() => {
    return lessons.sort((a, b) => a.order - b.order);
  }, [lessons]);

  const onOpen = (): void => {
    setIsOpen(true);
  };
  const onClose = (): void => {
    setIsOpen(false);
  };

  const handleLessonClick = (lessonId: string): void => {
    onLessonChange(lessonId);
    onClose();
  };

  const getIsFinished = (lessonId: string): boolean => {
    const videoObj = videoProgress?.find(video => video.videoId === lessonId);

    if (!videoObj) return false;

    return videoObj.isFinished;
  };

  useClickOutside(ref, onClose);

  return (
    <Box ref={ref}>
      <IconButton onClick={onOpen}>
        <Menu />
      </IconButton>
      <Box className={classes.root}>
        <Box className={classes.content}>
          <Typography component="h2" variant="h5" className={classes.title}>
            Lessons
          </Typography>
          <Box component="nav">
            <List>
              {sortedLessons.map(lesson => (
                <ListItem key={lesson.id}>
                  <LessonPreview
                    state={{
                      isActive: activeLesson === lesson.id,
                      isFinished: getIsFinished(lesson.link),
                    }}
                    lesson={lesson}
                    onLessonChange={handleLessonClick}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LessonNavigation;
