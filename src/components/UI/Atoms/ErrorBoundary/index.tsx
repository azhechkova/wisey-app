import { Alert } from '@mui/material';
import { AxiosError } from 'axios';
import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorBoundary = (): JSX.Element => {
  const error: unknown = useRouteError();

  const typedError = error as Error | AxiosError | null;

  return (
    <Alert role="alert" severity="error">
      {typedError?.message}
    </Alert>
  );
};

export default ErrorBoundary;
