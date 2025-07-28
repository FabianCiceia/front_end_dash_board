// src/socket.js
import { io } from 'socket.io-client';

const socket = io('https://api-dashboard-1xb1.onrender.com'); // Cambia por tu backend si está en otro host

export default socket;
