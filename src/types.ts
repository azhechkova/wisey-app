type MetaObject = {
  slug?: string;
  skills?: string[];
  courseVideoPreview?: {
    link?: string;
    previewImageLink?: string;
    duration?: number;
  };
};
export type LessonType = {
  id: string;
  title: string;
  duration: number;
  order: number;
  type: 'video';
  status: 'unlocked' | 'locked';
  link: string;
  previewImageLink: string;
  meta?: MetaObject | null;
};

export type CourseType = {
  id: string;
  title: string;
  tags: string[];
  launchDate?: string;
  status: 'launched';
  description: string;
  duration: number;
  lessonsCount?: number;
  lessons: LessonType[];
  containsLockedLessons: boolean;
  previewImageLink: string;
  rating: number;
  meta?: MetaObject | null;
};

export type ErrorType = Error | unknown | null;

export type TApiResponse<T> = {
  loading: boolean;
  error: ErrorType;
  data: T | null;
};

export type TrackVideoType = {
  videoId: string;
  progress: number;
  isFinished: boolean;
};
