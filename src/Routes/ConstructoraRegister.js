import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Snackbar, Alert, CircularProgress } from '@mui/material';
import { registerConstructora } from '../Api';

const ConstructoraRegister = () => {
  const [nombre, setNombre] = useState('');
  const [representanteLegal, setRepresentanteLegal] = useState('');
  const [direccion, setDireccion] = useState('');
  const [tiempoConstitucion, setTiempoConstitucion] = useState('');
  const [identificacion, setIdentificacion] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false); 
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false); 
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    const constructoraData = {
      user: {
        email,
        name: nombre,
        identification: identificacion,
      },
      incorporation_time: parseInt(tiempoConstitucion, 10),
      legal_representative: representanteLegal,
      address: direccion,
    };

    try {
      const response = await registerConstructora(constructoraData);
      console.log("Respuesta de registro:", response);
      setOpenSuccessSnackbar(true); 
    } catch (error) {
      console.error("Error en el registro:", error);
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
          Registro Constructora Inmobiliaria
        </Typography>
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
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Representante Legal"
          variant="outlined"
          margin="normal"
          fullWidth
          value={representanteLegal}
          onChange={(e) => setRepresentanteLegal(e.target.value)}
        />
        <TextField
          label="Dirección"
          variant="outlined"
          margin="normal"
          fullWidth
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
        <TextField
          label="Tiempo de Constitución (Años)"
          type="number"
          variant="outlined"
          margin="normal"
          fullWidth
          value={tiempoConstitucion}
          onChange={(e) => setTiempoConstitucion(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          type="submit"
          disabled={loading} 
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Registrar Constructora'}
        </Button>
        <Snackbar
          open={openSuccessSnackbar}
          autoHideDuration={4000}
          onClose={handleCloseSuccessSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseSuccessSnackbar} severity="success" sx={{ width: '100%' }}>
            ¡Constructora registrada exitosamente!
          </Alert>
        </Snackbar>
        <Snackbar
          open={openErrorSnackbar}
          autoHideDuration={4000}
          onClose={handleCloseErrorSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseErrorSnackbar} severity="error" sx={{ width: '100%' }}>
            Error al registrar la constructora. Por favor, intenta nuevamente.
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default ConstructoraRegister;
