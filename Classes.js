// src/pages/Classes.js
import React from 'react';
import './Classes.css'; // Import a CSS file for styling

const Classes = () => {
  // Mock class data
  const classes = [
    {
      name: 'Introduction to React',
      description: 'Learn the basics of React, including components, state, and props.',
      schedule: 'Mondays and Wednesdays, 10:00 AM - 12:00 PM',
      instructor: 'Jane Smith',
    },
    {
      name: 'Advanced JavaScript',
      description: 'Deep dive into advanced JavaScript concepts and ES6 features.',
      schedule: 'Tuesdays and Thursdays, 2:00 PM - 4:00 PM',
      instructor: 'John Doe',
    },
    {
      name: 'Web Development Bootcamp',
      description: 'A comprehensive bootcamp covering HTML, CSS, JavaScript, and more.',
      schedule: 'Weekends, 9:00 AM - 5:00 PM',
      instructor: 'Emily Johnson',
    },
    {
      name: 'Full-Stack Development',
      description: 'Master both front-end and back-end development with this intensive course.',
      schedule: 'Weekdays, 6:00 PM - 9:00 PM',
      instructor: 'Michael Brown',
    },
  ];

  return (
    <div className="classes-container">
      <h1>Available Classes</h1>
      <div className="classes-list">
        {classes.map((classItem, index) => (
          <div key={index} className="class-card">
            <h2>{classItem.name}</h2>
            <p><strong>Description:</strong> {classItem.description}</p>
            <p><strong>Schedule:</strong> {classItem.schedule}</p>
            <p><strong>Instructor:</strong> {classItem.instructor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
