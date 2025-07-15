
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const sampleData = [
    // Datos de ejemplo para la gráfica
    { time: '10:00', voltage: 220, current: 5 },
    { time: '10:05', voltage: 221, current: 4.9 },
    { time: '10:10', voltage: 219, current: 5.1 },
    { time: '10:15', voltage: 220, current: 5.2 },
    { time: '10:20', voltage: 218, current: 5.0 },
    { time: '10:25', voltage: 222, current: 5.3 },
    { time: '10:30', voltage: 221, current: 5.1 },
    { time: '10:35', voltage: 220, current: 5.0 },
    { time: '10:40', voltage: 219, current: 4.8 },
    { time: '10:45', voltage: 220, current: 5.2 },
    { time: '10:50', voltage: 221, current: 5.1 },
    { time: '10:55', voltage: 220, current: 5.0 },
    { time: '11:00', voltage: 219, current: 4.9 },
    { time: '11:05', voltage: 220, current: 5.3 },
    { time: '11:10', voltage: 221, current: 5.2 },
    { time: '11:15', voltage: 220, current: 5.0 },
    { time: '11:20', voltage: 219, current: 4.8 },
    { time: '11:25', voltage: 220, current: 5.1 },
    { time: '11:30', voltage: 221, current: 5.3 },
  // ...
];

const VoltageCurrentChart = ({ machine }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={sampleData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis yAxisId="left" label={{ value: 'Voltaje (V)', angle: -90, position: 'insideLeft' }} />
        <YAxis yAxisId="right" orientation="right" label={{ value: 'Corriente (A)', angle: -90, position: 'insideRight' }} />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="voltage" stroke="#d22519ff" />
        <Line yAxisId="right" type="monotone" dataKey="current" stroke="#00d451ff" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default VoltageCurrentChart;
