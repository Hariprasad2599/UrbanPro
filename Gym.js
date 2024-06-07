
// src/pages/Gym.js

import React from 'react';
import './Gym.css'; // Import the CSS file for styling

const Gym = () => {
  return (
    <div className="gym-page">
      <h1>Welcome to UrbanPro Gym</h1>
      <div className="gym-images">
        <img src="https://media.istockphoto.com/id/1183038884/photo/view-of-a-row-of-treadmills-in-a-gym-with-people.jpg?s=612x612&w=0&k=20&c=VnTSyKHKl-YFOmpFqW_hNyIlis0sFksfcR9Ei3-r29s=" alt="Gym" className="gym-image" />
        <img src="https://t3.ftcdn.net/jpg/03/19/27/58/360_F_319275875_vqeGDiMVZZrBd9m8B8xhoK0uqCawjbPU.jpg" alt="Gym" className="gym-image" />
        <img src="https://t3.ftcdn.net/jpg/05/62/71/86/360_F_562718625_BM93noP9JDAR8kiBPfRy0h4WTvUwYXNH.jpg" alt="Gym" className="gym-image" />
      </div>

      <div className="gym-content">
      <section className="intro">
          <h2>About Our Gym</h2>
          <p>At UrbanPro Gym, we are committed to helping you achieve your fitness goals and live a healthier lifestyle. Our mission is to provide a supportive environment where individuals of all fitness levels can thrive. With state-of-the-art facilities, experienced trainers, and a wide range of classes and programs, we offer everything you need to succeed on your fitness journey.</p>
          <p>Our gym features top-of-the-line equipment, including cardio machines, weightlifting equipment, and functional training areas. Our certified trainers are dedicated to helping you reach your full potential, offering personalized workout plans, nutritional guidance, and ongoing support.</p>
          <p>Whether you're a beginner or a seasoned athlete, we welcome you to join our community and experience the difference at UrbonPro Gym. With flexible membership options, convenient hours, and a friendly atmosphere, we make it easy for you to prioritize your health and wellness.</p>
        </section>

        <section className="schedule">
          <h2>Class Schedule</h2>
          <ul>
            <li>Monday: Yoga - 9:00 AM</li>
            <li>Tuesday: Cardio Blast - 6:00 PM</li>
            <li>Wednesday: Strength Training - 7:00 PM</li>
            <li>Thursday: Pilates - 8:00 AM</li>
            <li>Friday: Zumba - 5:00 PM</li>
            <li>Saturday: HIIT - 10:00 AM</li>
            <li>Sunday: Restorative Yoga - 4:00 PM</li>
          </ul>
        </section>

        <section className="membership">
          <h2>Membership Plans</h2>
          <ul>
            <li>Basic Plan: $30/month</li>
            <li>Premium Plan: $50/month</li>
            <li>Family Plan: $80/month</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Gym;



