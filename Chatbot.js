// Chatbox.js

import React from 'react';
import './chatbox.css'; // Ensure to style your component

const Chatbox = () => {
  return (
    <div className="chatbox-container">
      <div className="chatbox-content">
        <div className="chatbox-messages">
          {/* Render chat messages here */}
        </div>
        <div className="chatbox-input">
          <input
            type="text"
            placeholder="Type a message..."
          />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
