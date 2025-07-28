import React from 'react';
import '../styles/dashboard.css';
import { useNavigate } from 'react-router-dom';
import useApi from '../hooks/useApi';

const Dashboard = () => {
  const navigate = useNavigate();

  const { data: machines, loading, error } = useApi({
    url: '/machines'
  });

  const handleMachineClick = (id) => {
    navigate(`/machines/${id}`);
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar las máquinas: {error.message}</p>;

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Bienvenido al panel. Selecciona una máquina para ver su información.</p>

      <div className="machine-list">
        {machines && machines.map((maquina) => (
          <button
            key={maquina.id}
            className="machine-item"
            onClick={() => handleMachineClick(maquina.id)}
          >
            {maquina.name ? maquina.name : `Máquina #${maquina.id}`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
