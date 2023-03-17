import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: (): jest.Mock<void> => mockedUsedNavigate,
}));

describe('Course component', () => {
  test('renders properly', () => {
    const { container } = render(<Course course={course} />);

    expect(container).toMatchSnapshot();
  });
  test('has description and title', () => {
    render(<Course course={course} />);

    expect(screen.getByText(course.title)).toBeInTheDocument();
    expect(screen.getByText(course.description)).toBeInTheDocument();
  });

  test('navigates to the course page', () => {
    render(<Course course={course} />);

    fireEvent.click(screen.getByText('Learn More'));
    expect(mockedUsedNavigate).toHaveBeenCalledWith(`/courses/${course.id}`);
  });
});
