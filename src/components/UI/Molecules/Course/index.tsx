import React, { useRef } from 'react';
import {
  CardContent,
  Box,
  Typography,
  Card,
  List,
  ListItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import Rating from '@mui/material/Rating';
import { CourseType } from '~/types';

import Tag from '~/components/UI/Atoms/Tag';
import CourseVideo from '~/components/UI/Atoms/CourseVideo';
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
          <Box className={classes.info}>
            <Rating value={course.rating} />
            <Typography className={classes.lessonsCount}>
              <SchoolIcon /> {course.lessonsCount}
            </Typography>
          </Box>
          <List className={classes.list}>
            {course.meta?.skills?.length &&
              course.meta.skills.map(tag => (
                <ListItem key={tag} className={classes.listItem}>
                  <Tag label={tag} />
                </ListItem>
              ))}
          </List>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Course;
