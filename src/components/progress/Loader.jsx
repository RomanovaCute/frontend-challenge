import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { PreloderWrapper } from './styles'

export const CircularIndeterminate = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}

export const Preloder = () => {
  return(
     <PreloderWrapper>
         <CircularIndeterminate></CircularIndeterminate>
     </PreloderWrapper>
  )
}