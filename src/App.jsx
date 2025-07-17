import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Prueba from './pages/Prueba';  
import Maquina from './pages/Maquina';

function App() {
  return (
    // Enviar un mensaje por consola para verificar que el componente se ha cargado
    console.log('App component loaded'),
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <Box sx={{ p: 3 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/prueba" element={<Prueba/> } />
            <Route path="/maquina/:id" element={<Maquina />} />
            {/* Agrega más rutas aquí */}
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
