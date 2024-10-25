// src/Api.js
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
