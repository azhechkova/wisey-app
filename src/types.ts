export type LessonType = {
  id: string;
  title: string;
  duration: number;
  order: number;
  type: 'video';
  status: 'unlocked' | 'locked';
  link: string;
  previewImageLink: string;
  meta: object | null;
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
  meta?: {
    slug?: string;
    skills?: string[];
    courseVideoPreview?: {
      link?: string;
      previewImageLink?: string;
      duration?: number;
    };
  } | null;
};

export type ErrorType = unknown | null | Error;

export type TApiResponse<T> = {
  loading: boolean;
  error: ErrorType;
  data: T | null;
};
