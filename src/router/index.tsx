import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '../components';

import PreviewCourse from '../pages/PreviewCourse';
import PreviewCourses, { coursesLoader } from '../pages/PreviewCourses';

const router = createBrowserRouter([
  {
    path: '/courses',
    element: <PreviewCourses />,
    loader: coursesLoader,
    ErrorBoundary,
  },
  {
    path: '/courses/:id',
    element: <PreviewCourse />,
    ErrorBoundary,
  },
]);

export default router;
