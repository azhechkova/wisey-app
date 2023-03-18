export const PROJECT_NAME = 'wisey-app';

export const VIDEOS_STORAGE = 'wisey-app-videos';

export const LESSON_STATUS = {
  locked: 'locked',
  unlocked: 'unlocked',
};

const HOST = process.env.REACT_APP_API_HOST;
const VERSION = process.env.REACT_APP_API_VERSION;

export const baseURL = `${HOST}/${VERSION}`;
