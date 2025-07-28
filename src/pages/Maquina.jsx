import React from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../hooks/useApi';
import VoltajeChart from '../components/VoltajeChart';
import CorrienteChart from '../components/CorrienteChart';

const Maquina = () => {
  const { id } = useParams();

  const { data: machineData, loading, error } = useApi({
    url: `/machines/${id}`,
    method: 'GET'
  });

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: 50 }}>
        <h2>Cargando datos de la máquina...</h2>
      </div>
    );
  }

  if (error) {
    console.error('Error al cargar los datos de la máquina:', error);
    return (
      <h1 style={{ color: 'red', textAlign: 'center' }}>
        Error al cargar los datos de la máquina.
      </h1>
    );
  }

  if (!machineData) {
    return <p>No se encontró información de la máquina.</p>;
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>Datos de {machineData.name ?? `Máquina #${id}`}</h2>
      <VoltajeChart data={machineData.measurements} />
      <CorrienteChart data={machineData.measurements} />
    </div>
  );
};

export default Maquina;
