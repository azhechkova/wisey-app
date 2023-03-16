import React from 'react';
import {
  CardContent,
  Typography,
  Card,
  CardActions,
  Button,
  List,
  ListItem,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import useStyles from './styles';
import { CourseType } from '../../types';

import Tag from '../Tag';
import CourseVideo from '../CourseVideo';

interface CourseProps {
  course: CourseType;
}

const Course = ({ course }: CourseProps): JSX.Element => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const onNavigate = (): void => navigate(`/courses/${course.id}`);

  const imageLink = `${course.previewImageLink}/cover.webp`;

  return (
    <Card className={classes.card}>
      <CourseVideo
        src={course?.meta?.courseVideoPreview?.link}
        width="352"
        height="198"
        controls={false}
        poster={imageLink}
        muted
        playOnHover
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {course.description}
        </Typography>
        <List>
          <ListItem className={classes.listItem}>
            Rating: {course.rating}
          </ListItem>
          <ListItem className={classes.listItem}>
            Lessons: {course.lessonsCount}
          </ListItem>
        </List>
        <CardActions>
          <Button variant="contained" size="small" onClick={onNavigate}>
            Learn More
          </Button>
        </CardActions>
        {course.tags.map(tag => (
          <Tag label={tag} key={tag} />
        ))}
      </CardContent>
    </Card>
  );
};

export default Course;
