import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Prueba from './pages/Prueba';  
import Maquina from './pages/Maquina';
import Login from './pages/Login';
import './styles/comun.css';
function App() {
  return (
    // Enviar un mensaje por consola para verificar que el componente se ha cargado
    console.log('App component loaded'),
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/prueba" element={<Prueba/> } />
            <Route path="/machines/:id" element={<Maquina />} />
            <Route path="/login" element={<Login />} />
            {/* Agrega más rutas aquí */}
          </Routes>

      </Box>
    </Box>
  );
}

export default App;
