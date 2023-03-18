import { VIDEOS_STORAGE } from '~/constants';
import { TrackVideoType } from '~/types';
import { RootState } from './types';

export const getActiveLesson = (store: RootState): string =>
  store.app.activeLesson;

export const getVideoProgress = (store: RootState): TrackVideoType[] =>
  store.app.videoProgress;

export const loadState = (): Partial<RootState> | undefined => {
  try {
    const serializedState = localStorage.getItem(VIDEOS_STORAGE);

    if (serializedState === null) {
      return undefined;
    }

    return {
      app: {
        activeLesson: '',
        videoProgress: JSON.parse(serializedState),
      },
    };
  } catch (err) {
    return undefined;
  }
};

type SaveStateType = {
  videoProgress: TrackVideoType[];
};

export const saveState = (state: SaveStateType): void => {
  const serializedState = JSON.stringify(state.videoProgress);

  localStorage.setItem(VIDEOS_STORAGE, serializedState);
};
