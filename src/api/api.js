import axios from 'axios';
import Swal from 'sweetalert2';

const API_URL = 'http://localhost:3000/api/voltaje'; // Reemplazá por tu IP pública si es necesario

export const getLecturasPorMaquina = async (maquina, apiKey = '12345') => {
  try {
    const response = await axios.get(`${API_URL}/maquina/${maquina}`, {
      params: { api_key: apiKey },
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener lecturas:', error);
    Swal.fire('Error', 'No se pudieron cargar los datos', 'error');
    return [];
  }
};
