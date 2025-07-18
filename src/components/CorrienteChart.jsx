import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

const CorrienteChart = ({ data }) => {
  if (!data || data.length === 0) return <p>No hay datos para mostrar.</p>;

  // Calcular corriente mínima y máxima con margen de 10
  const corrientes = data.map(d => parseFloat(d.corriente));
  const minC = Math.min(...corrientes) - 2;
  const maxC = Math.max(...corrientes) + 2;

  return (
    <div style={{ marginBottom: 40 }}>
      <h3>Gráfica de Corriente</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="fecha" />
          <YAxis domain={[minC, maxC]} />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="corriente" stroke="#82ca9d" name="Corriente" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CorrienteChart;
