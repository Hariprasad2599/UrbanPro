// src/pages/Account.js
import React from 'react';
import './Account.css'; // Import a CSS file for styling

const Account = () => {
  // Mock account data
  const user = {
    name: 'Hariprasad Mahadik',
    email: 'harimahadik1999@gmail.com',
    bio: 'Web developer and tech enthusiast.',
    profilePicture: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    settings: {
      theme: 'Dark',
      notifications: true,
    },
    recentActivities: [
      'Logged in from a new device',
      'Changed password',
      'Updated profile picture',
    ],
  };

  return (
    <div className="account-container">
      <div className="account-header">
        <img src={user.profilePicture} alt="Profile" className="profile-picture" />
        <div className="account-details">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.bio}</p>
        </div>
      </div>
      <div className="account-settings">
        <h2>Account Settings</h2>
        <p><strong>Theme:</strong> {user.settings.theme}</p>
        <p><strong>Notifications:</strong> {user.settings.notifications ? 'Enabled' : 'Disabled'}</p>
      </div>
      <div className="account-activities">
        <h2>Recent Activities</h2>
        <ul>
          {user.recentActivities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Account;
