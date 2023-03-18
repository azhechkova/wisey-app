import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithProviders } from '~/utils/storeTest';
import LessonVideo from '../UI/Molecules/LessonVideo';

const props = {
  src: 'https://example.com/video.mp4',
  duration: 120,
  id: 'video',
};

describe('LessonVideo', () => {
  it('renders properly', () => {
    const { container } = renderWithProviders(<LessonVideo {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('should render the video player with right src', () => {
    const { container } = renderWithProviders(<LessonVideo {...props} />);

    const videoElement = container.querySelector('#video');

    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute('src', props.src);
  });

  it('should update the video progress and track the progress when the video is played', () => {
    const currentTime = 30;
    const event = {
      target: {
        currentTime,
      },
    };

    const { container } = renderWithProviders(<LessonVideo {...props} />);

    const videoElement = container.querySelector('#video');

    expect(videoElement).toBeInTheDocument();

    if (!videoElement) return;
    fireEvent.timeUpdate(videoElement, event);

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  it('should increase the playback speed when the increase key is pressed', () => {
    const { container } = renderWithProviders(<LessonVideo {...props} />);

    const videoElement = container.querySelector('#video') as HTMLVideoElement;

    fireEvent.keyPress(window, { code: 'KeyS' });
    expect(videoElement).toBeInTheDocument();

    expect(videoElement!.playbackRate).toBe(1.25);
  });

  it('should not increase the playback speed when the increase key is pressed and the current rate is the maximum', () => {
    const { container } = renderWithProviders(<LessonVideo {...props} />);

    const videoElement = container.querySelector('#video') as HTMLVideoElement;

    expect(videoElement).toBeInTheDocument();

    fireEvent.keyPress(window, { code: 'KeyS' });
    fireEvent.keyPress(window, { code: 'KeyS' });
    fireEvent.keyPress(window, { code: 'KeyS' });
    fireEvent.keyPress(window, { code: 'KeyS' });
    fireEvent.keyPress(window, { code: 'KeyS' });

    expect(videoElement.playbackRate).toBe(2);
    fireEvent.keyPress(window, { code: 'KeyS' });

    expect(videoElement.playbackRate).toBe(2);
  });
});
