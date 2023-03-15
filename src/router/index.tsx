import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import PreviewCourses, { coursesLoader } from '../pages/PreviewCourses';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PreviewCourses />,
    loader: coursesLoader,
  },
]);

export default router;
