import React from 'react';
import { Box } from '@mui/material';

export const LoadingComponent : React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }} justifyContent={'center'} >
        <h1>Loading ...</h1>
    </Box>
  );
}
