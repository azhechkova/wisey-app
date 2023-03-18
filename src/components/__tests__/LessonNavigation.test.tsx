import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { LessonType } from '~/types';
import { renderWithProviders } from '~/utils/storeTest';
import LessonNavigation from '../UI/Organisms/LessonNavigation';

describe('LessonNavigation', () => {
  const lessons: LessonType[] = [
    {
      id: '1',
      title: 'Lesson 1',
      order: 1,
      link: 'https://example.com/lesson1',
      duration: 10,
      status: 'unlocked',
      type: 'video',
      previewImageLink: '',
    },
    {
      id: '2',
      title: 'Lesson 2',
      order: 2,
      link: 'https://example.com/lesson2',
      duration: 20,
      status: 'unlocked',
      type: 'video',
      previewImageLink: '',
    },
  ];
  const mockCallback = jest.fn();

  it('renders the component', () => {
    renderWithProviders(
      <LessonNavigation lessons={lessons} onLessonChange={mockCallback} />,
    );

    expect(screen.getByText('Lessons')).toBeInTheDocument();
    expect(screen.getByText('Lesson 1')).toBeInTheDocument();
    expect(screen.getByText('Lesson 2')).toBeInTheDocument();
  });

  it('calls the onLessonChange callback when a lesson is clicked', () => {
    renderWithProviders(
      <LessonNavigation lessons={lessons} onLessonChange={mockCallback} />,
    );

    fireEvent.click(screen.getByText('Lesson 1'));
    expect(mockCallback).toHaveBeenCalledWith('1');

    fireEvent.click(screen.getByText('Lesson 2'));
    expect(mockCallback).toHaveBeenCalledWith('2');
  });
});
