import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = "12345";
const API_BASE_URL = "https://api-dashboard-1xb1.onrender.com/api";
const useApi = ({
  url,
  method = 'GET',
  body = null,
  params = {},
  autoFetch = true,
  headers = {}
}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const config = {
        method,
        url: `${API_BASE_URL}${url}`, // Construir la URL completa
        // Si el método es POST, PUT o PATCH, incluir el cuerpo de la solicitud
        data: body,
        // params: {
        //   ...params,
        //   api_key: API_KEY // 🔑 Agregar la clave como parámetro de consulta
        // },
        headers: {
          ...headers
          // No usamos x-api-key si no es necesario
        },
      };

      console.log('Solicitando:', config); // debug útil
      const response = await axios(config);
      setData(response.data);
        console.log('Datos recibidos:', response.data); // Para depuración
    } catch (err) {
      setError(err);
      console.error('API error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) fetchData();
  }, [url, method, body, JSON.stringify(params)]);
    // Para depuración, puedes imprimir la data recibida
  return { data, loading, error, refetch: fetchData };
};

export default useApi;
