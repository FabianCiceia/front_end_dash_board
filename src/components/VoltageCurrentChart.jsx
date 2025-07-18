import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const VoltageCurrentChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <XAxis dataKey="fecha" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="voltaje" stroke="#8884d8" name="Voltaje" />
        <Line type="monotone" dataKey="corriente" stroke="#82ca9d" name="Corriente" />
        {/* Si querés mostrar flujo también: */}
        {/* <Line type="monotone" dataKey="flujo" stroke="#ff7300" name="Flujo" /> */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default VoltageCurrentChart;
