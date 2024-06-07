

import React, { useState } from 'react';
import './Activities.css';

const Activities = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const activities = [
    { title: 'Hiking', description: 'Explore the mountains and enjoy the scenic views.', time: '8:00 AM - 12:00 PM' },
    { title: 'Yoga', description: 'A relaxing morning yoga session.', time: '7:00 AM - 8:00 AM' },
    { title: 'Cooking Class', description: 'Learn to cook delicious meals.', time: '2:00 PM - 4:00 PM' },
    { title: 'Art Workshop', description: 'Express your creativity through painting.', time: '4:30 PM - 6:30 PM' },
  ];

  const handleBook = (activity) => {
    setSelectedActivity(activity);
    // Implement booking logic here
    alert(`You have booked: ${activity.title}`);
  };

  const handlePayment = (activity) => {
    // Implement payment logic here
    alert(`Proceed to payment for: ${activity.title}`);
  };

  return (
    <div className="activities">
      <h1>Activities</h1>
      <div className="activity-list">
        {activities.map((activity, index) => (
          <div className="activity" key={index}>
            <h2>{activity.title}</h2>
            <p>{activity.description}</p>
            <p><strong>Time:</strong> {activity.time}</p>
            <div className="activity-buttons">
              <button onClick={() => handleBook(activity)}>Book</button>
              <button onClick={() => handlePayment(activity)}>Payment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
