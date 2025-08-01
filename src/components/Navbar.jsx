import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Dashboard Bomba de Agua</Typography>
      {/* Boton login */}
      <button onClick={() => window.location.href = '/login'} style={{ marginLeft: 'auto' }}>
        Login
      </button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
