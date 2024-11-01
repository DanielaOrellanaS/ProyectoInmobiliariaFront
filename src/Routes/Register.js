import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h4" gutterBottom>
          Registro
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ mt: 2 }}
          component={Link} 
          to="/register/asesor" 
        >
          Registro Asesor Comercial
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ mt: 2 }} 
          component={Link} 
          to="/register/constructora" 
        >
          Registro Constructora Inmobiliaria
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
