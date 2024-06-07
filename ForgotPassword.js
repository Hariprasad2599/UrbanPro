


import React, { useState } from 'react';
import './ForgotPassword.css'; // Ensure the correct path to your CSS file

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating a successful response
    setMessage(`OTP has been sent successfully to ${email}`);
    // Uncomment the code below and remove the line above when the server is ready
    /*
    try {
      const response = await fetch('http://localhost:5000/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage(`OTP has been sent successfully to ${email}`);
      } else {
        setMessage('Failed to send OTP.');
      }
    } catch (error) {
      setMessage('Failed to send OTP.');
    }
    */
  };

  return (
    <div className="forgot-password-container">
      <h3>Forgot Password</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send OTP</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
