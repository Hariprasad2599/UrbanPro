



import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; // Import the CSS file

function Login({ users, setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      setCurrentUser(user);
      navigate('/profile');
    } else {
      setErrorMessage('Incorrect email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
      <Link to="/forgot-password">Forgot Password?</Link>
    </div>
  );
}

export default Login;
