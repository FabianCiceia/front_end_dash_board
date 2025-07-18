import React from 'react';
import '../styles/dashboard.css';
import { useNavigate } from 'react-router-dom';
import useApi from '../hooks/useApi';

const Dashboard = () => {
  const navigate = useNavigate();

  const { data: machines, loading, error } = useApi({
    url: '/maquina'
  });

  const handleMachineClick = (maquina) => {
    navigate(`/maquina/${maquina}`);
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Bienvenido al panel. Selecciona una máquina para ver su información.</p>

      {loading && <p>Cargando lista de máquinas...</p>}
      {error && <p style={{ color: 'red' }}>Error al cargar las máquinas</p>}

      <div className="machine-list">
        {machines && machines.map((maquina) => (
          <button
            key={maquina}
            className="machine-item"
            onClick={() => handleMachineClick(maquina)}
          >
            {maquina}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
