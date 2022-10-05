import * as React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import Error from '../components/Error';

const myErrorHandler = (error: Error) => {
  console.error(error);
};

function ErrorFallback({_}) {
  return <Error msg={'Error with component'} isDarkMode={true} />;
}

export const ErrorHandler = ({children}: {children: React.ReactNode}) => (
  <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
    {children}
  </ErrorBoundary>
);
