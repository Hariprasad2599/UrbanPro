

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file

function Sidebar({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions, such as clearing user session
    setCurrentUser(null);
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/classes">Classes</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
        <li>
          <Link to="/tutor">Tutor</Link>
        </li>
        <li>
          <Link to="/activities">Activities</Link>
        </li>
        <li>
          <Link to="/community-session">Community Session</Link>
        </li>
        <li>
          <Link to="/gym">Gym</Link>
          <li>
          <Link to="/Billing">Billing</Link>
        </li>
        <li>
          <Link to="/Chatbot">Chatbot</Link>
        </li>
       
        </li>
        <li>
          <Link to="/feedback">Feedback</Link>
        </li>

        {currentUser && (
        <button onClick={handleLogout}>Logout</button>
      )}
      </ul>
    </div>
  );
}

export default Sidebar;

