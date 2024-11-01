import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Paper, Avatar, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { fetchUserProfile } from '../Api';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const data = await fetchUserProfile();
        setProfileData(data);
      } catch (error) {
        setError('Error al cargar la información del perfil.');
        localStorage.removeItem('token');
        navigate('/');
      }
    };

    loadProfileData();
  }, [navigate]);

  if (error) {
    return (
      <Container maxWidth="sm">
        <Typography color="error" variant="h6" gutterBottom>{error}</Typography>
      </Container>
    );
  }

  if (!profileData) {
    return (
      <Container maxWidth="sm">
        <Typography variant="h6" gutterBottom>Cargando perfil...</Typography>
      </Container>
    );
  }

  const { user, ...rest } = profileData;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        background: 'linear-gradient(to right, #4A90E2, #9013FE)', // Fondo degradado
        padding: 4,
        color: 'white', // Color de texto blanco para contraste
      }}
    >
      <Paper elevation={6} sx={{ flexGrow: 1, borderRadius: 2, padding: 3, backgroundColor: '#FFFFFF' }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="flex-start">
          <Stack alignItems="center">
            <Avatar
              alt={user.name}
              src="/path/to/user/avatar.jpg" // Reemplaza con la URL real del avatar
              sx={{ width: 120, height: 120, mb: 2, border: '2px solid #4A90E2' }} // Borde alrededor del avatar
            />
            <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>{user.name}</Typography>
            <Typography variant="subtitle1" sx={{ color: '#7B7B7B', fontSize: '1.2rem' }}>{user.email}</Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="h6" gutterBottom sx={{ color: '#4A90E2', fontSize: '1.5rem' }}>Información Adicional</Typography>
            <Box>
              {rest.incorporation_time !== undefined ? (
                <>
                  <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                    <strong>Tiempo de Incorporación:</strong> {rest.incorporation_time} años
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                    <strong>Representante Legal:</strong> {rest.legal_representative}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                    <strong>Dirección:</strong> {rest.address}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                    <strong>Biografía:</strong> {rest.biography}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                    <strong>Habilidades:</strong> {rest.skills}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                    <strong>Reseñas:</strong> {rest.reviews}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                    <strong>Número de Ventas:</strong> {rest.num_sales}
                  </Typography>
                </>
              )}
            </Box>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Profile;
