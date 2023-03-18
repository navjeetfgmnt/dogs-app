import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Pets as PetsIcon } from '@mui/icons-material';

export function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" pr={3}>
            <PetsIcon sx={{ marginRight: '10px' }} />
            Dog Breeds
          </Typography>
          <Link to="/">Dogs List</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
