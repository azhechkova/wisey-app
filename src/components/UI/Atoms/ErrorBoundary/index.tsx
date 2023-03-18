import React from 'react';
import { AxiosError } from 'axios';
import { useRouteError } from 'react-router-dom';
import Error from '../Error';

const ErrorBoundary = (): JSX.Element => {
  const error: unknown = useRouteError();

  const typedError = error as Error | AxiosError | null;

  return <Error message={typedError?.message || ''} />;
};

export default ErrorBoundary;
