// hooks/useReservation.js
import { useState } from 'react';
import Swal from 'sweetalert2';
import PREFIX_API from '../api/PrefixApi';

export const useReservation = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    edad: '',
    num_personas: '',
    fecha_llegada: '',
    fecha_salida: ''
  });
  const [habitaciones, setHabitaciones] = useState([]);
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState(null);
  const [loading, setLoading] = useState(false);

  // Función para mostrar alertas
  const mostrarAlerta = (texto, icono = "info") => {
    Swal.fire({
      icon: icono,
      text: texto,
      confirmButtonColor: "#B05C41",
      background: "#F6F3EF",
      color: "#3D443F",
    });
  };

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Validaciones del paso 1
  const validarStep1 = () => {
    const { nombre, email, telefono, edad, num_personas, fecha_llegada, fecha_salida } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!nombre || !email || !telefono || !edad || !num_personas || !fecha_llegada || !fecha_salida) {
      mostrarAlerta("Por favor completa todos los campos", "warning");
      return false;
    }
    if (!emailRegex.test(email)) {
      mostrarAlerta("El correo electrónico no es válido", "error");
      return false;
    }
    if (!phoneRegex.test(telefono)) {
      mostrarAlerta("El teléfono debe ser un número de 10 dígitos", "error");
      return false;
    }
    if (edad < 18 || edad > 99) {
      mostrarAlerta("La edad debe ser entre 18 y 99 años", "error");
      return false;
    }
    if (fecha_salida <= fecha_llegada) {
      mostrarAlerta("La fecha de salida debe ser posterior a la fecha de llegada", "error");
      return false;
    }

    return true;
  };

  // Obtener habitaciones disponibles con Axios
  const obtenerHabitacionesDisponibles = async () => {
    const { fecha_llegada, fecha_salida, num_personas } = formData;
    
    try {
      const response = await PREFIX_API.get('/rooms/available', {
        params: {
          from: fecha_llegada,
          to: fecha_salida,
          num_personas: num_personas
        }
      });

      if (response.data.success) {
        setHabitaciones(response.data.data);
        return true;
      } else {
        setHabitaciones([]);
        mostrarAlerta("No hay habitaciones disponibles para las fechas seleccionadas");
        return false;
      }
    } catch (error) {
      console.error('Error al obtener habitaciones:', error);
      
      // Manejar diferentes tipos de errores
      let mensajeError = "Error cargando habitaciones";
      
      if (error.response) {
        // El servidor respondió con un código de error
        mensajeError = error.response.data.message || "Error del servidor al cargar habitaciones";
      } else if (error.request) {
        // La petición fue hecha pero no se recibió respuesta
        mensajeError = "Error de conexión. No se pudo contactar al servidor.";
      } else {
        // Algo pasó en la configuración de la petición
        mensajeError = "Error inesperado al cargar habitaciones";
      }
      
      mostrarAlerta(mensajeError, "error");
      setHabitaciones([]);
      return false;
    }
  };

  // Navegación entre steps
  const irAStep1 = () => {
    setCurrentStep(1);
  };

  const irAStep2 = async () => {
    if (!validarStep1()) return;

    setLoading(true);
    try {
      const habitacionesDisponibles = await obtenerHabitacionesDisponibles();
      // SOLO cambia de step si la petición fue exitosa Y hay habitaciones disponibles
      if (habitacionesDisponibles) {
        setCurrentStep(2);
      }
      // Si habitacionesDisponibles es false, NO cambia de step y ya se mostró la alerta
    } catch (error) {
      // Esto no debería pasar porque los errores ya se manejan en obtenerHabitacionesDisponibles
      mostrarAlerta("Error inesperado al cargar las habitaciones");
    } finally {
      setLoading(false);
    }
  };

  const irAStep3 = () => {
    if (!habitacionSeleccionada) {
      mostrarAlerta("Selecciona una habitación", "warning");
      return;
    }
    setCurrentStep(3);
  };

  // Calcular estadía
  const calcularEstadia = () => {
    if (!habitacionSeleccionada || !formData.fecha_llegada || !formData.fecha_salida) {
      return { noches: 0, total: 0 };
    }

    const checkin = new Date(formData.fecha_llegada);
    const checkout = new Date(formData.fecha_salida);
    const noches = Math.ceil((checkout - checkin) / (1000 * 3600 * 24));
    const total = (noches * habitacionSeleccionada.precio_noche).toFixed(2);

    return { noches, total };
  };

  // Enviar reserva con Axios
  const enviarReserva = async (e) => {
    if (e) e.preventDefault();
    
    setLoading(true);
    try {
      // Crear FormData
      const formDataToSend = new FormData();
      
      // Agregar todos los datos del formulario
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      
      formDataToSend.append("habitacion_id", habitacionSeleccionada.id);

      const response = await PREFIX_API.post('/reservations/store', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      if (response.data.success) {
        setCurrentStep(4);
      } else {
        mostrarAlerta("Error al guardar la reserva. " + response.data.message, "error");
        // NO cambia de step si hay error
      }
    } catch (error) {
      console.error('Error al enviar reserva:', error);
      
      // Manejar diferentes tipos de errores
      let mensajeError = "Error al procesar la reserva";
      
      if (error.response) {
        // El servidor respondió con un código de error
        mensajeError = error.response.data.message || "Error del servidor al procesar la reserva";
      } else if (error.request) {
        // La petición fue hecha pero no se recibió respuesta
        mensajeError = "Error de conexión. No se pudo contactar al servidor.";
      } else {
        // Algo pasó en la configuración de la petición
        mensajeError = "Error inesperado al procesar la reserva";
      }
      
      mostrarAlerta(mensajeError, "error");
      // NO cambia de step si hay error
    } finally {
      setLoading(false);
    }
  };

  const { noches, total } = calcularEstadia();

  return {
    currentStep,
    formData,
    habitaciones,
    habitacionSeleccionada,
    loading,
    handleInputChange,
    irAStep1,
    irAStep2,
    irAStep3,
    enviarReserva,
    setHabitacionSeleccionada,
    noches,
    total
  };
};