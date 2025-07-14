import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function VoltajeChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="fecha" />
        <YAxis domain={[200, 250]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="voltaje" stroke="#8884d8" activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
