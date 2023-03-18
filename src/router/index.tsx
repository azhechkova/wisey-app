import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ErrorBoundary } from '../components';

import PreviewCourse from '../pages/PreviewCourse';
import PreviewCourses from '../pages/PreviewCourses';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="courses" />,
  },
  {
    path: '*',
    element: <Navigate to="courses" />,
  },
  {
    path: '/courses',
    element: <PreviewCourses />,
    ErrorBoundary,
  },
  {
    path: '/courses/:id',
    element: <PreviewCourse />,
    ErrorBoundary,
  },
]);

export default router;
