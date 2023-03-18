import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TrackVideoType } from '~/types';

interface AppState {
  videoProgress: TrackVideoType[];
  activeLesson: string;
}

const initialState: AppState = {
  videoProgress: [],
  activeLesson: '',
};

const appSlice = createSlice({
  name: 'app',

  initialState,

  reducers: {
    setActiveLesson(state, action: PayloadAction<string>) {
      state.activeLesson = action.payload;
    },
    updateVideoProgress(state, action: PayloadAction<TrackVideoType>) {
      let newProgress = state.videoProgress;

      if (
        state.videoProgress.some(
          video => video.videoId === action.payload.videoId,
        )
      ) {
        newProgress = state.videoProgress.map(video => {
          if (video.videoId === action.payload.videoId) {
            return action.payload;
          }

          return video;
        });
      } else {
        newProgress = [...state.videoProgress, action.payload];
      }
      state.videoProgress = newProgress;
    },
  },
});

export const { setActiveLesson, updateVideoProgress } = appSlice.actions;

export default appSlice.reducer;
