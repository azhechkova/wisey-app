import React from 'react';
import { render } from '@testing-library/react';
import { CourseType } from '../../types';

import CourseList from '../UI/Organisms/CourseList';

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

describe('CourseList component', () => {
  test('renders properly', () => {
    const { container } = render(<CourseList courses={[course]} />);

    expect(container).toMatchSnapshot();
  });
});
