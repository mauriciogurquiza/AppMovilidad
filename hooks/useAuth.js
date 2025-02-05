import { useState } from 'react';
import axios from 'axios';

const API_URL = "http://192.168.170.64:3000/api/users/login";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para iniciar sesión
  const login = async (email, password, onSuccess) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(API_URL, {
        email,
        password
      });

      setUser(response.data); // Guarda los datos del usuario autenticado

      if (onSuccess) {
        onSuccess(); // Llama al callback si se proporciona
      }
    } catch (err) {
      setError(err.response?.data?.message || "Error en el login");
    } finally {
      setLoading(false);
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
  };

  return { user, loading, error, login, logout };
}
