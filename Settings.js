// src/pages/Settings.js
import React, { useState } from 'react';
import './Settings.css'; // Import a CSS file for styling

const Settings = () => {
  // Mock user data
  const [user, setUser] = useState({
    name: 'Hariprasad Prakash Mahadik',
    email: 'harimahadik1999@gmail.com',
    password: '',
    notifications: true,
    theme: 'Light',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({
      ...user,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement save functionality here
    alert('Settings saved!');
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <div className="settings-section">
          <h2>Personal Information</h2>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="settings-section">
          <h2>Change Password</h2>
          <label>
            New Password:
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="settings-section">
          <h2>Notifications</h2>
          <label>
            <input
              type="checkbox"
              name="notifications"
              checked={user.notifications}
              onChange={handleInputChange}
            />
            Enable Notifications
          </label>
        </div>
        <div className="settings-section">
          <h2>Theme</h2>
          <label>
            <input
              type="radio"
              name="theme"
              value="Light"
              checked={user.theme === 'Light'}
              onChange={handleInputChange}
            />
            Light
          </label>
          <label>
            <input
              type="radio"
              name="theme"
              value="Dark"
              checked={user.theme === 'Dark'}
              onChange={handleInputChange}
            />
            Dark
          </label>
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;
