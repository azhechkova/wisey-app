import { VIDEOS_STORAGE } from '~/constants';
import { TrackVideoType } from '~/types';

export const trackVideoProgress = (trackVideo: TrackVideoType): void => {
  const videos = localStorage.getItem(VIDEOS_STORAGE);

  if (!videos) {
    localStorage.setItem(VIDEOS_STORAGE, JSON.stringify([trackVideo]));

    return;
  }

  const parsedVideos = JSON.parse(videos) as TrackVideoType[];

  if (!parsedVideos.some(video => video.videoId === trackVideo.videoId)) {
    const newProgress = parsedVideos.push(trackVideo);

    localStorage.setItem(VIDEOS_STORAGE, JSON.stringify(newProgress));
  }

  const newProgress = parsedVideos.map(video => {
    if (video.videoId === trackVideo.videoId) {
      return trackVideo;
    }

    return video;
  });

  localStorage.setItem(VIDEOS_STORAGE, JSON.stringify(newProgress));
};

export const getVideoProgress = (videoId: string): TrackVideoType => {
  const videos = localStorage.getItem(VIDEOS_STORAGE);
  const emptyProgress = { videoId, progress: 0, isFinished: false };

  if (!videos) {
    return emptyProgress;
  }

  const parsedVideos = JSON.parse(videos) as TrackVideoType[];
  const progressVideo = parsedVideos.find(video => videoId === video.videoId);

  if (!progressVideo) return emptyProgress;

  return progressVideo;
};
