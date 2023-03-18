import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LessonType } from '~/types';
import { LESSON_STATUS } from '~/constants';
import LessonPreview from '../UI/Molecules/LessonPreview';

describe('LessonPreview component', () => {
  const lesson = {
    id: '1',
    title: 'Test Lesson',
    duration: 60,
    status: LESSON_STATUS.unlocked,
  } as LessonType;
  const onLessonChange = jest.fn();

  it('should render the lesson title and duration', () => {
    const { getByText } = render(
      <LessonPreview
        lesson={lesson}
        onLessonChange={onLessonChange}
        state={{}}
      />,
    );

    expect(getByText('Test Lesson')).toBeInTheDocument();
    expect(getByText('01:00 min')).toBeInTheDocument();
  });

  it('should call onLessonChange when clicked', () => {
    const { getByLabelText } = render(
      <LessonPreview
        lesson={lesson}
        onLessonChange={onLessonChange}
        state={{}}
      />,
    );

    fireEvent.click(getByLabelText('lesson button'));
    expect(onLessonChange).toHaveBeenCalledWith('1');
  });

  it('should render the Slideshow icon when the lesson is unlocked', () => {
    const { container } = render(
      <LessonPreview
        lesson={lesson}
        onLessonChange={onLessonChange}
        state={{}}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render the LockOutlined icon when the lesson is locked', () => {
    const lockedLesson = {
      id: '2',
      title: 'Locked Lesson',
      duration: 30,
      status: LESSON_STATUS.locked,
    } as LessonType;
    const { container } = render(
      <LessonPreview
        lesson={lockedLesson}
        onLessonChange={onLessonChange}
        state={{}}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render the Check icon when the lesson is finished', () => {
    const { container } = render(
      <LessonPreview
        lesson={lesson}
        onLessonChange={onLessonChange}
        state={{ isFinished: true }}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
