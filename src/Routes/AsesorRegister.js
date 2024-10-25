// src/components/AsesorRegister.js

import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container } from '@mui/material';

const AsesorRegister = () => {
  const [nombre, setNombre] = useState('');
  const [foto, setFoto] = useState(null);
  const [biografia, setBiografia] = useState('');
  const [skills, setSkills] = useState('');
  const [reseñas, setReseñas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de los datos al backend
    console.log({ nombre, foto, biografia, skills, reseñas });
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
          label="Nombre"
          variant="outlined"
          margin="normal"
          fullWidth
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <TextField
          label="Foto"
          type="file"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={(e) => setFoto(e.target.files[0])}
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
          value={reseñas}
          onChange={(e) => setReseñas(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          type="submit"
        >
          Registrar Asesor
        </Button>
      </Box>
    </Container>
  );
};

export default AsesorRegister;
