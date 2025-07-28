// src/socket.js
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000'); // Cambia por tu backend si está en otro host

export default socket;
