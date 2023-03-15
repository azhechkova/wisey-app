import {
  CardContent,
  Typography,
  Card,
  CardActions,
  Button,
  CardMedia,
  List,
  ListItem,
} from '@mui/material';
import React from 'react';

import useStyles from './styles';
import { CourseType } from '../../types';
import { Tag } from '..';

interface CourseProps {
  course: CourseType;
}

const Course = ({ course }: CourseProps): JSX.Element => {
  const { classes } = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        sx={{ height: 140 }}
        image={`${course.previewImageLink}/cover.webp`}
        title="green iguana"
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
          <Button variant="contained" size="small">
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
