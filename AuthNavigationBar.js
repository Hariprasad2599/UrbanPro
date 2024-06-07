import React from 'react';
import { Link } from 'react-router-dom';
import './AuthNavigationBar.css';

const AuthNavigationBar = () => {
  return (
    <nav className="auth-navigation-bar">
      <ul>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/forgot-password">Forgot Password</Link></li>
      </ul>
    </nav>
  );
};

export default AuthNavigationBar;
