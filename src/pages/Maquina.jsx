import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../hooks/useApi';
import VoltajeChart from '../components/VoltajeChart';
import CorrienteChart from '../components/CorrienteChart';
import socket from '../socket';

const Maquina = () => {
  const { id } = useParams();
  const [mediciones, setMediciones] = useState([]);
  const { data: machineData, loading, error } = useApi({
    url: `/machines/${id}`
  });

  useEffect(() => {
    if (machineData?.measurements) {
      setMediciones(machineData.measurements);
    }
  }, [machineData]);

  useEffect(() => {
    socket.on('newMeasurement', (data) => {
      if (data.machine_id === parseInt(id)) {
        setMediciones((prev) => [data, ...prev]);
      }
    });

    return () => socket.off('newMeasurement');
  }, [id]);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error al cargar: {error.message}</p>;

const chartData = mediciones.map((m) => ({
  time: new Date(m.time).toLocaleTimeString(), // eje X
  current: m.current,                          // eje Y para CorrienteChart
  voltage_a: m.voltage_a,
  voltage_b: m.voltage_b,
  voltage_c: m.voltage_c
}));

  

  return (
    <div style={{ padding: 24 }}>
      <h2>{machineData.name} - Tiempo real</h2>
      <VoltajeChart data={chartData} />
      <CorrienteChart data={chartData} />
    </div>
  );
};

export default Maquina;
