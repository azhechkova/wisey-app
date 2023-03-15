export type CourseType = {
    id: string,
    title: string,
    tags: string[],
    launchDate: string,
    status: 'launched',
    description: string,
    duration: number,
    lessonsCount: number,
    containsLockedLessons: boolean,
    previewImageLink: string,
    rating: number,
    meta: object | null
}

export type LessonType = {
    id: string,
    title: string,
    duration: number,
    order: number,
    type: 'video',
    status: 'unlocked' | 'locked',
    link: string,
    previewImageLink: string,
    meta: object | null
}
