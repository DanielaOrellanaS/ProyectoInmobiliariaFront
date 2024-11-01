import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Snackbar, Alert, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { registerAsesor } from '../Api'; 

const AsesorRegister = () => {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [identificacion, setIdentificacion] = useState('');
  const [password, setPassword] = useState('');
  const [biografia, setBiografia] = useState('');
  const [skills, setSkills] = useState('');
  const [resenas, setResenas] = useState('');
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    const asesorData = {
      user: {
        email: email,
        name: nombre,
        identification: identificacion,
      },
      password: password,
      biography: biografia,
      skills: skills,
      reviews: resenas,
      num_sales: 0, 
    };

    console.log("Datos del Asesor:", asesorData); 

    try {
      await registerAsesor(asesorData);
      setOpenSuccessSnackbar(true);
      navigate('/');
    } catch (error) {
      console.error("Error al registrar el asesor:", error);
      setOpenErrorSnackbar(true); 
    } finally {
      setLoading(false); 
    }
  };

  const handleCloseSuccessSnackbar = () => {
    setOpenSuccessSnackbar(false);
  };

  const handleCloseErrorSnackbar = () => {
    setOpenErrorSnackbar(false);
  };

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" gutterBottom>
          Registro Asesor Comercial
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Nombre"
          variant="outlined"
          margin="normal"
          fullWidth
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <TextField
          label="Identificación"
          variant="outlined"
          margin="normal"
          fullWidth
          value={identificacion}
          onChange={(e) => setIdentificacion(e.target.value)}
        />
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Biografía"
          variant="outlined"
          margin="normal"
          fullWidth
          multiline
          rows={4}
          value={biografia}
          onChange={(e) => setBiografia(e.target.value)}
        />
        <TextField
          label="Skills"
          variant="outlined"
          margin="normal"
          fullWidth
          multiline
          rows={2}
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <TextField
          label="Reseñas"
          variant="outlined"
          margin="normal"
          fullWidth
          multiline
          rows={2}
          value={resenas}
          onChange={(e) => setResenas(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          type="submit"
          disabled={loading} 
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Registrar Asesor'}
        </Button>
        <Snackbar
          open={openSuccessSnackbar}
          autoHideDuration={4000}
          onClose={handleCloseSuccessSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseSuccessSnackbar} severity="success" sx={{ width: '100%' }}>
            ¡Registro completado exitosamente!
          </Alert>
        </Snackbar>
        <Snackbar
          open={openErrorSnackbar}
          autoHideDuration={4000}
          onClose={handleCloseErrorSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseErrorSnackbar} severity="error" sx={{ width: '100%' }}>
            Error al registrar el asesor. Por favor, intenta nuevamente.
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default AsesorRegister;
