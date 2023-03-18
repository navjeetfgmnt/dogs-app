import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth={false}>
        <Box sx={{ height: '100vh' }}>
          <Outlet />
        </Box>
      </Container>
    </div>
  );
}

export default App;
