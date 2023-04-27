import React from 'react';
import { Box } from '@mui/material';
import { ErrorAlert } from './ErrorAlert';

export const ErrorPage : React.FC<{message: string}> = ({message}) => {
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <ErrorAlert error={message}/>
  </Box>
  );
}
