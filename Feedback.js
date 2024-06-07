// src/pages/Feedback.js

import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission (e.g., send it to a server)
    console.log('Feedback submitted:', { email, feedback });
    setSubmitted(true);
    setFeedback('');
    setEmail('');
  };

  return (
    <div className="feedback-page">
      <h1>Feedback</h1>
      {submitted ? (
        <p className="thank-you-message">Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit} className="feedback-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback here..."
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
