import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container sx={{ maxWidth: 1000, margin: 'auto' }}>
        <Box sx={{ height: 'calc(100vh - 125px)' }}>
          <Outlet />
        </Box>
      </Container>
    </div>
  );
}

export default App;
