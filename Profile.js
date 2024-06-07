// src/pages/Profile.js
import React from 'react';
import './Profile.css'; // Import a CSS file for styling

const Profile = () => {
  // Mock user data
  const user = {
    name: 'Hariprasad Prakash Mahadik',
    email: 'harimahadik1999@gmail.com',
    bio: 'Web developer and tech enthusiast.',
    profilePicture: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image URL
    posts: [
      'Started learning React!',
      'Just deployed my first website.',
      'Loving the new JavaScript features!',
    ],
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={user.profilePicture} alt="Profile" className="profile-picture" />
        <div className="profile-details">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.bio}</p>
        </div>
      </div>
      <div className="profile-posts">
        <h2>Recent Activities</h2>
        <ul>
          {user.posts.map((post, index) => (
            <li key={index}>{post}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
