import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

interface CourseVideoProps
  extends React.VideoHTMLAttributes<HTMLVideoElement | HTMLMediaElement> {
  src?: string;
  playOnHover?: boolean;
}

const CourseVideo = ({
  src,
  playOnHover,
  ...props
}: CourseVideoProps): JSX.Element => {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = ref.current as HTMLMediaElement;

    if (Hls.isSupported() && src) {
      const hls = new Hls();

      hls.loadSource(src);

      hls.attachMedia(video);
    }
  }, [ref, src]);

  const onPlay = (): void => {
    if (playOnHover) {
      ref?.current?.play();
    }
  };
  const onStop = (): void => {
    if (playOnHover) {
      ref?.current?.pause();
    }
  };

  return (
    <video
      ref={ref}
      onFocus={(): void => {}}
      onBlur={(): void => {}}
      onMouseOver={onPlay}
      onMouseOut={onStop}
      {...props}
    >
      <track kind="captions" />
    </video>
  );
};

export default CourseVideo;