import React, { useState } from 'react';
import '../styles/login.css'; // Asegúrate de tener un archivo CSS para estilos

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', { email, password });

    // Aquí puedes hacer la petición a tu API con fetch o axios
    // Ejemplo:
    // axios.post('/api/login', { email, password })
    //   .then(res => console.log(res.data))
    //   .catch(err => console.error(err));
  };

  return (
    <div className="login-page">
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Sign in to your account</p>

        <div className="input-container">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit">
          Sign in
        </button>

        <p className="signup-link">
          No account? <a href="/register">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
// src/pages/Login.jsx