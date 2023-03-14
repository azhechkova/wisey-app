import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import PreviewCourses from '../pages/PreviewCourses';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PreviewCourses />,
  },
]);

export default router;
