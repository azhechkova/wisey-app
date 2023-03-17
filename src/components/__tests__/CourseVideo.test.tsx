import { render } from '@testing-library/react';
import React from 'react';
import CourseVideo from '../UI/Atoms/CourseVideo';

describe('CourseVideo', () => {
  it('renders without crashing', () => {
    const { container } = render(<CourseVideo />);
    const videoElement = container.querySelector('video');

    expect(videoElement).toBeInTheDocument();
  });
});
