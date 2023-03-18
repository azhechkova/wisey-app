import React, { useEffect, RefObject } from 'react';
import Hls from 'hls.js';

interface VideoProps
  extends React.VideoHTMLAttributes<HTMLVideoElement | HTMLMediaElement> {
  src?: string;
  playOnHover?: boolean;
  currentTime?: number;
  videoRef: RefObject<HTMLVideoElement>;
}

const Video = ({
  src,
  playOnHover,
  currentTime,
  videoRef,
  ...props
}: VideoProps): JSX.Element => {
  useEffect(() => {
    if (!videoRef?.current) return;
    const video = videoRef?.current as HTMLMediaElement;

    if (Hls.isSupported() && src) {
      const hls = new Hls();

      hls.loadSource(src);

      hls.attachMedia(video);
    }
  }, [videoRef, src]);

  const onPlay = (): void => {
    if (playOnHover) {
      videoRef?.current?.play();
    }
  };
  const onStop = (): void => {
    if (playOnHover) {
      videoRef?.current?.pause();
    }
  };

  useEffect(() => {
    if (!currentTime || !videoRef?.current) {
      return;
    }
    videoRef.current.currentTime = currentTime;
  }, [videoRef, currentTime]);

  return (
    <video
      ref={videoRef}
      src={src}
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

export default Video;
