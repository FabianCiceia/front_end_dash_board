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

const VoltageChart = ({ data }) => {
  if (!data || data.length === 0) return <p>No hay datos para mostrar.</p>;

  // Calcular voltaje mínimo y máximo con margen de 10
  const voltajes = data.map(d => parseFloat(d.voltaje));
  const minV = Math.min(...voltajes) - 10;
  const maxV = Math.max(...voltajes) + 10;

  return (
    <div style={{ marginBottom: 40 }}>
      <h3>Gráfica de Voltaje</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="fecha" />
          <YAxis domain={[minV, maxV]} />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="voltaje" stroke="#8884d8" name="Voltaje" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VoltageChart;
