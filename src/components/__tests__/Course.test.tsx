import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { CourseType } from '../../types';

import Course from '../UI/Molecules/Course';

const course: CourseType = {
  id: '1',
  title: 'Mock course',
  tags: ['tag'],
  status: 'launched',
  description: 'Course description',
  duration: 100,
  lessons: [],
  containsLockedLessons: false,
  previewImageLink: '',
  rating: 1,
};

describe('Course component', () => {
  test('renders properly', () => {
    const { container } = render(
      <MemoryRouter>
        <Course course={course} />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
  test('has description and title', () => {
    render(
      <MemoryRouter>
        <Course course={course} />
      </MemoryRouter>,
    );

    expect(screen.getByText(course.title)).toBeInTheDocument();
    expect(screen.getByText(course.description)).toBeInTheDocument();
  });
});
