import { TrackVideoType } from '~/types';

export type RootState = {
  app: {
    activeLesson: string;
    videoProgress: TrackVideoType[];
  };
};
