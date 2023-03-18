import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CourseType } from '~/types';
import CourseList from '../UI/Organisms/CourseList';

const course: CourseType = {
  id: '1',
  title: 'Test Course 1',
  description: 'This is a test course',
  previewImageLink: 'https://example.com/image1.png',
  tags: [],
  status: 'launched',
  duration: 50,
  lessons: [],
  containsLockedLessons: false,
  rating: 5,
};
const courses: CourseType[] = Array(11).map((_, index) => {
  return { ...course, id: `${index}` };
});

describe('CourseList component', () => {
  it('should render the correct number of courses', () => {
    const { container } = render(
      <MemoryRouter>
        <CourseList courses={courses} />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render the "Show more" button when there are more courses than the limit', () => {
    render(
      <MemoryRouter>
        <CourseList courses={courses} />
      </MemoryRouter>,
    );
    const button = screen.getByText('Show more');

    expect(button).toBeInTheDocument();
  });
});
