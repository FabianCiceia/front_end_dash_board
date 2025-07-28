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

  // Calcular min y max considerando las tres fases
  const allVoltages = data.flatMap(d => [d.voltage_a, d.voltage_b, d.voltage_c]);
  const minV = Math.min(...allVoltages) - 10;
  const maxV = Math.max(...allVoltages) + 10;
if (allVoltages.length === 0) {
    return <p>No hay datos de voltaje disponibles.</p>;
  }
  else {
    // console.log("Datos de voltaje:", data); // Para depuración
  }
  return (
    <div style={{ marginBottom: 40 }}>
      <h3>Gráfica de Voltajes (Fase A, B y C)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis domain={[minV, maxV]} />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="voltage_a" stroke="#ff7300" name="Fase A" />
          <Line type="monotone" dataKey="voltage_b" stroke="#387908" name="Fase B" />
          <Line type="monotone" dataKey="voltage_c" stroke="#8884d8" name="Fase C" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VoltageChart;
