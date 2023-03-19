import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        background: '#e6e6e6',
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h6">The page you’re looking for doesn’t exist.</Typography>
      <p>
        <Button variant="contained" onClick={() => navigate('/')}>
          Back Home
        </Button>
      </p>
    </Box>
  );
}
