import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import { loginUser } from '../Api';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const token = await loginUser(email, password);
      if (token) {
        localStorage.setItem('token', token);
        navigate('/profile');
      }
    } catch (error) {
      setError('Error al iniciar sesión. Por favor, verifica tus credenciales.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
        <Typography variant="h4" gutterBottom>Iniciar Sesión</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <TextField label="Correo Electrónico" variant="outlined" margin="normal" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Contraseña" type="password" variant="outlined" margin="normal" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleLogin}>Iniciar Sesión</Button>
        <Button variant="text" color="primary" fullWidth sx={{ mt: 1 }} component={Link} to="/register">Registrarse</Button>
      </Box>
    </Container>
  );
};

export default Login;
