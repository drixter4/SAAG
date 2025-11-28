import axios from 'axios';

// URL base de la API desde variables de entorno
const baseURL = process.env.REACT_APP_API_URL;

// Crear instancia de axios
const PREFIX_API = axios.create({ baseURL });

// Interceptor para REQUEST (antes de enviar la petición)
PREFIX_API.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default PREFIX_API;