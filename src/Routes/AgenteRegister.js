// src/components/AgenteRegister.js

import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container } from '@mui/material';

const AgenteRegister = () => {
  const [nombre, setNombre] = useState('');
  const [representanteLegal, setRepresentanteLegal] = useState('');
  const [direccion, setDireccion] = useState('');
  const [tiempoConstitucion, setTiempoConstitucion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de los datos al backend
    console.log({ nombre, representanteLegal, direccion, tiempoConstitucion });
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
          Registro Agente Comercial
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
        >
          Registrar Agente
        </Button>
      </Box>
    </Container>
  );
};

export default AgenteRegister;
