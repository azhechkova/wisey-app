import React, { useRef } from 'react';
import {
  CardContent,
  Box,
  Typography,
  Card,
  List,
  ListItem,
  Rating,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { School } from '@mui/icons-material';

import { CourseType } from '~/types';

import Tag from '~/components/UI/Atoms/Tag';
import CourseVideo from '~/components/UI/Atoms/Video';

import useStyles from './styles';

interface CourseProps {
  course: CourseType;
}

const Course = ({ course }: CourseProps): JSX.Element => {
  const { classes } = useStyles();
  const ref = useRef<HTMLVideoElement | null>(null);
  const imageLink = `${course.previewImageLink}/cover.webp`;

  return (
    <Link to={`/courses/${course.id}`} className={classes.root}>
      <Card className={classes.card}>
        <CourseVideo
          className={classes.video}
          src={course?.meta?.courseVideoPreview?.link}
          width="100%"
          height="198"
          controls={false}
          poster={imageLink}
          muted
          playOnHover
          videoRef={ref}
        />
        <CardContent className={classes.content}>
          <Box>
            <Typography fontWeight={700} variant="h6" component="h2">
              {course.title}
            </Typography>
            <Typography
              className={classes.description}
              variant="body2"
              color="text.primary"
            >
              {course.description}
            </Typography>
          </Box>
          <Box>
            <Box className={classes.info}>
              <Rating value={course.rating} />
              <Typography className={classes.lessonsCount}>
                <School /> {course.lessonsCount}
              </Typography>
            </Box>
            <List className={classes.list}>
              {course?.tags?.length &&
                course.tags.map(tag => (
                  <ListItem key={tag} className={classes.listItem}>
                    <Tag label={tag} />
                  </ListItem>
                ))}
            </List>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Course;
