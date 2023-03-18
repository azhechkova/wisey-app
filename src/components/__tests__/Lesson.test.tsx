import React from 'react';
import { LessonType } from '~/types';
import { LESSON_STATUS } from '~/constants';
import { renderWithProviders } from '~/utils/storeTest';
import Lesson from '../UI/Molecules/Lesson';

describe('Lesson component', () => {
  const lesson = {
    id: '1',
    title: 'Lesson 1',
    link: 'https://example.com/lesson1.mp4',
    duration: 90,
    status: LESSON_STATUS.unlocked,
  } as LessonType;
  const previewVideo = 'https://example.com/preview.mp4';

  it('renders lesson title', () => {
    const { getByText } = renderWithProviders(<Lesson lesson={lesson} />);

    expect(getByText('Lesson 1')).toBeInTheDocument();
  });

  it('renders lesson video when status is unlocked', () => {
    const { container } = renderWithProviders(<Lesson lesson={lesson} />);
    const video = container.querySelector('video');

    expect(video).toBeInTheDocument();

    expect(video).toHaveAttribute('src', 'https://example.com/lesson1.mp4');
  });

  it('renders preview video when provided', () => {
    const { container } = renderWithProviders(
      <Lesson previewVideo={previewVideo} />,
    );
    const video = container.querySelector('video');

    expect(video).toBeInTheDocument();

    expect(video).toHaveAttribute('src', 'https://example.com/preview.mp4');
  });
});
