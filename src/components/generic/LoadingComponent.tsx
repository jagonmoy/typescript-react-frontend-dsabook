import React from 'react';
import { Box } from '@mui/material';
interface Props {
}

export const LoadingComponent : React.FC<Props> = () => {
  return (
    <Box sx={{ display: 'flex' }} justifyContent={'center'} >
        <h1>Loading ...</h1>
    </Box>
  );
}
