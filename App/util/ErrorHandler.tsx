import * as React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {View, StyleSheet, Button, Text} from 'react-native';
import Error from '../components/Error';

const myErrorHandler = (error: Error) => {
  console.error(error);
};

function ErrorFallback({resetErrorBoundary}) {
  return <Error msg={'Error with component'} isDarkMode={true} />;
}

export const ErrorHandler = ({children}: {children: React.ReactNode}) => (
  <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
    {children}
  </ErrorBoundary>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 12,
  },
});
