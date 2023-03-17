import React, { useMemo } from 'react';
import { Box, Typography, ListItem, List } from '@mui/material';
import useStyles from './styles';
import { LessonType } from '../../../../types';
import LessonPreview from '../../Molecules/LessonPreview';

interface LessonNavigationProps {
  lessons: LessonType[];
  onLessonChange: (lessonId: string) => void;
  activeLesson?: string | null;
}

const LessonNavigation = ({
  lessons,
  onLessonChange,
  activeLesson,
}: LessonNavigationProps): JSX.Element => {
  const { classes } = useStyles();

  const sortedLessons = useMemo(() => {
    return lessons.sort((a, b) => a.order - b.order);
  }, [lessons]);

  return (
    <Box component="aside" className={classes.root}>
      <Typography component="h2" variant="h5" marginBottom={3} fontWeight={600}>
        Lessons
      </Typography>
      <List>
        {sortedLessons.map(lesson => (
          <ListItem key={lesson.id}>
            <LessonPreview
              isActive={activeLesson === lesson.id}
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
