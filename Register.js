

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'; // Import the CSS file

function Register({ setUsers, currentUser }) {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'student' // default role
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setUsers((prevUsers) => [...prevUsers, formData]);
    navigate('/login'); // Navigate to login page upon successful registration
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label>
          Role:
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="tutor">Tutor</option>
            <option value="student">Student</option>
          </select>
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone No.:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
      {currentUser && (
        <div className="user-info">
          <h2>User Information</h2>
          <p>Name: {currentUser.name}</p>
          <p>City: {currentUser.city}</p>
          <p>Email: {currentUser.email}</p>
          <p>Phone: {currentUser.phone}</p>
          <p>Role: {currentUser.role}</p>
        </div>
      )}
    </div>
  );
}

export default Register;
