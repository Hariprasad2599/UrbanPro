// src/pages/Support.js
import React from 'react';
import './Support.css'; // Import a CSS file for styling

const Support = () => {
  // Mock FAQ data
  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the settings page and click on "Change Password".',
    },
    {
      question: 'How do I contact support?',
      answer: 'You can contact support by filling out the form below or sending an email to support@example.com.',
    },
    {
      question: 'Where can I find the user guide?',
      answer: 'The user guide is available in the resources section below.',
    },
  ];

  return (
    <div className="support-container">
      <h1>Support</h1>
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="contact-form-section">
        <h2>Contact Us</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="resources-section">
        <h2>Support Resources</h2>
        <ul>
          <li><a href="/user-guide.pdf" target="_blank" rel="noopener noreferrer">User Guide</a></li>
          <li><a href="/faq" target="_blank" rel="noopener noreferrer">Full FAQ</a></li>
          <li><a href="/contact-support" target="_blank" rel="noopener noreferrer">Contact Support</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Support;
