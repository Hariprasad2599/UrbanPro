import React from 'react';
import './Billing.css';

const Billing = ({ currentUser }) => {
  // Sample data for courses and activities
  const courses = [
    { name: 'Math 101', price: 200 },
    { name: 'Science 201', price: 300 },
    { name: 'History 101', price: 150 }
  ];

  const activities = [
    { name: 'Yoga Class', price: 50 },
    { name: 'Swimming', price: 75 },
    { name: 'Basketball', price: 60 }
  ];

  const totalAmount = courses.reduce((acc, course) => acc + course.price, 0) + 
                      activities.reduce((acc, activity) => acc + activity.price, 0);

  if (!currentUser) {
    return <p>Please log in to view your billing statement.</p>;
  }

  return (
    <div className="billing-container">
      <h2>Billing Statement</h2>
      <div className="user-info">
        <p><strong>Name:</strong> {currentUser.name}</p>
        <p><strong>Email:</strong> {currentUser.email}</p>
      </div>
      <div className="billing-section">
        <h3>Courses</h3>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>
              <span>{course.name}</span>
              <span>${course.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="billing-section">
        <h3>Activities</h3>
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>
              <span>{activity.name}</span>
              <span>${activity.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="total-amount">
        <h3>Total Amount: ${totalAmount}</h3>
      </div>
    </div>
  );
};

export default Billing;
