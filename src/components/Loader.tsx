import { Box, CircularProgress } from '@mui/material';
import React from 'react';

export function Loader() {
  return (
    <Box py={2} sx={{ textAlign: 'center' }}>
      <CircularProgress />
    </Box>
  );
}
