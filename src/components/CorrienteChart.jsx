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
  return (
    <div style={{ marginBottom: 40 }}>
      <h3>Corriente</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="fecha" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="corriente" stroke="#82ca9d" name="Corriente" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CorrienteChart;
