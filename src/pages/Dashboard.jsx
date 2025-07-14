import React from 'react';
import '../styles/dashboard.css';
import { useNavigate } from 'react-router-dom';

const machines = [
  { name: 'Bomba A', path: 'bomba-a' },
  { name: 'Bomba B', path: 'bomba-b' },
  { name: 'Bomba C', path: 'bomba-c' },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const handleMachineClick = (path) => {
    navigate(`/maquina/${path}`);
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Bienvenido al panel. Selecciona una máquina para ver su información.</p>

      <div className="machine-list">
        {machines.map((machine) => (
          <button
            key={machine.path}
            className="machine-item"
            onClick={() => handleMachineClick(machine.path)}
          >
            {machine.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
