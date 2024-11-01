const apiUrl = 'https://proyectoinmobiliaria.onrender.com';
const localUrl = 'http://127.0.0.1:8000';

export async function getCsrfToken() {
  try {
    const response = await fetch(`${apiUrl}/get-csrf-token/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch CSRF token');
    }
    const data = await response.json();
    return data.csrfToken;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(email, password) {
  try {
    const response = await fetch(`${apiUrl}/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error('Error al iniciar sesión');
    }
    const data = await response.json();
    return data.token;
  } catch (error) {
    throw error;
  }
}

export async function registerAsesor(asesorData) {
  try {
    console.log("Datos que se enviarán:", JSON.stringify(asesorData)); 

    const response = await fetch(`${apiUrl}/asesores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(asesorData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error en respuesta:', errorData);
      throw new Error('Error al registrar asesor');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en la función registerAsesor:", error);
    throw error;
  }
}

export async function registerConstructora(constructoraData) {
  try {
    console.log("Datos que se enviarán:", JSON.stringify(constructoraData)); 

    const response = await fetch(`${apiUrl}/constructoras/`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(constructoraData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error en respuesta:', errorData);
      throw new Error('Error al registrar constructora');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en la función registerConstructora:", error);
    throw error;
  }
}

export const fetchUserProfile = async () => {
  const token = localStorage.getItem('token');
  
  const response = await fetch(`${apiUrl}/user/profile/`, {
    method: 'GET',
    headers: {
      'Authorization': `Token ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('No se pudo obtener el perfil');
  }

  const data = await response.json();
  return data;
};
