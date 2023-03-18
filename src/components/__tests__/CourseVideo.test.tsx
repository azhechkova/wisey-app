import { render } from '@testing-library/react';
import React from 'react';
import CourseVideo from '../UI/Atoms/Video';

describe('CourseVideo', () => {
  it('renders without crashing', () => {
    const { container } = render(<CourseVideo videoRef={jest.fn()} />);
    const videoElement = container.querySelector('video');

    expect(videoElement).toBeInTheDocument();
  });
});
