import React, {
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
  VideoHTMLAttributes,
} from 'react';
import { Button, Typography, Box } from '@mui/material';
import CourseVideo from '~/components/UI/Atoms/CourseVideo';
import { useAppDispatch } from '~/store';
import { updateVideoProgress } from '~/store/reducers/app';
import {
  trackVideoProgress,
  getVideoProgress,
} from '~/utils/trackVideoProgress';
import { SPEED_KEYS } from '~/constants';
import useStyles from './styles';

interface LessonVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src?: string;
  duration: number;
}

const MIN_PLAYBACK_RATE = 0.25;
const MAX_PLAYBACK_RATE = 2;
const LessonVideo = ({
  src,
  duration,
  ...props
}: LessonVideoProps): JSX.Element => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLVideoElement | null>(null);
  const [isPipActive, setIsPipActive] = useState(false);

  const videoProgress = getVideoProgress(src || '');

  const onTimeUpdate = (event: SyntheticEvent<HTMLVideoElement>): void => {
    if (videoProgress?.isFinished) return;
    const target = event.target as HTMLVideoElement;
    const progress = target.currentTime;
    const isFinished = Math.round(progress) >= duration;

    const progressItem = {
      videoId: src || '',
      progress,
      isFinished,
    };

    dispatch(updateVideoProgress(progressItem));
    trackVideoProgress(progressItem);
  };

  const togglePiPMode = async (): Promise<void> => {
    const video = ref.current;

    if (!video) return;

    if (video !== document.pictureInPictureElement) {
      await video.requestPictureInPicture();
      setIsPipActive(true);
    } else {
      await document.exitPictureInPicture();
      setIsPipActive(false);
    }
  };

  const onPipOpen = async (): Promise<void> => {
    const isPiPSupported =
      'pictureInPictureEnabled' in document && document.pictureInPictureEnabled;

    if (!isPiPSupported) {
      alert('Picture in Picture is disabled in your browser.');

      return;
    }

    await togglePiPMode();
  };

  const increase = (): void => {
    const video = ref.current;

    if (!video) return;
    if (video.playbackRate < MAX_PLAYBACK_RATE) {
      video.playbackRate += MIN_PLAYBACK_RATE;
    }
  };

  const decrease = (): void => {
    const video = ref.current;

    if (!video) return;

    if (video.playbackRate > MIN_PLAYBACK_RATE) video.playbackRate -= 0.25;
  };

  const onKeyPress = useCallback((e: KeyboardEvent): void => {
    if (e.code === SPEED_KEYS.decrease.code) {
      decrease();
    } else if (e.code === SPEED_KEYS.increase.code) {
      increase();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keypress', onKeyPress);

    return () => {
      window.removeEventListener('keypress', onKeyPress);
    };
  }, [onKeyPress]);

  return (
    <Box className={classes.root}>
      <Box className={classes.info}>
        <Button onClick={onPipOpen}>
          {isPipActive ? 'Close video' : 'Open video in tab'}
        </Button>
        <Typography className={classes.infoText}>
          {SPEED_KEYS.decrease.label} - decrease speed;{' '}
          {SPEED_KEYS.increase.label} - increase speed
        </Typography>
      </Box>
      <CourseVideo
        onTimeUpdate={onTimeUpdate}
        controls
        src={src}
        currentTime={videoProgress?.progress || 0}
        className={classes.video}
        videoRef={ref}
        {...props}
      />
    </Box>
  );
};

export default LessonVideo;
