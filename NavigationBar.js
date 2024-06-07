import React from 'react';
import { Link } from 'react-router-dom';
// import './NavigationBar.css';

function NavigationBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/account">Account</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/tutor">Tutor</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/community-session">Community Session</Link></li>
        <li><Link to="/gym">Gym</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
