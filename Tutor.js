
import React, { useState } from 'react';
import './Tutor.css';

const tutors = [
  {
    id: 1,
    name: 'Aarav Sharma',
    email: 'aaravsharma@example.com',
    classes: 'ReactJS, HTML, CSS',
    reviews: 'Excellent tutor with great communication skills.',
    contactInfo: 'Phone: 123-456-7890',
    education: 'B.Tech in Computer Science',
    rating: 4.5,
    image: 'https://t3.ftcdn.net/jpg/03/60/98/94/360_F_360989474_iv2b8GaEPKVD4oKjAZtILmc2mMT7tdZS.jpg',
    demoVideos: ['https://www.youtube.com/watch?v=-mJFZp84TIY&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt', 'https://www.example.com/demo2.mp4'],
    notes: [
      { title: 'ReactJS Basics', link: 'https://www.example.com/notes/reactjs-basics.pdf' },
      { title: 'Advanced CSS', link: 'https://www.example.com/notes/advanced-css.pdf' }
    ]
  },
  {
    id: 2,
    name: 'Aisha Patel',
    email: 'aishapatel@example.com',
    classes: 'JavaScript, Node.js, MongoDB',
    reviews: 'Very helpful and knowledgeable tutor.',
    contactInfo: 'Phone: 987-654-3210',
    education: 'Masters in Computer Engineering',
    rating: 4.2,
    image: 'https://t4.ftcdn.net/jpg/03/83/80/97/360_F_383809707_Wb3a2lrXqCUDZVp9joaWqK5K9RcGkd96.jpg',
    demoVideos: ['https://www.example.com/demo1.mp4', 'https://www.example.com/demo2.mp4'],
    notes: [
      { title: 'JavaScript Basics', link: 'https://www.example.com/notes/javascript-basics.pdf' },
      { title: 'Advanced Node.js', link: 'https://www.example.com/notes/advanced-nodejs.pdf' }
    ]
  },
  {
    id: 3,
    name: 'Vivaan Gupta',
    email: 'vivaangupta@example.com',
    classes: 'Python, Django, Data Science',
    reviews: 'Patient and understanding tutor.',
    contactInfo: 'Phone: 456-789-0123',
    education: 'PhD in Computer Science',
    rating: 4.8,
    image: 'https://img.freepik.com/premium-photo/indian-teacher-with-student-class-room_130568-506.jpg',
    demoVideos: ['https://www.example.com/demo1.mp4', 'https://www.example.com/demo2.mp4'],
    notes: [
      { title: 'Python Basics', link: 'https://www.example.com/notes/python-basics.pdf' },
      { title: 'Advanced Django', link: 'https://www.example.com/notes/advanced-django.pdf' }
    ]
  },
  {
    id: 4,
    name: 'Ishaan Singh',
    email: 'ishaansingh@example.com',
    classes: 'Java, Spring Boot, Hibernate',
    reviews: 'Excellent Java tutor, very clear explanations.',
    contactInfo: 'Phone: 234-567-8901',
    education: 'Bachelor of Engineering in Computer Science',
    rating: 4.7,
    image: 'https://t3.ftcdn.net/jpg/04/18/93/10/360_F_418931061_OxjkVMfynUfJwbjEh5qKnS9zmTa9Pxud.jpg',
    demoVideos: ['https://www.example.com/demo1.mp4', 'https://www.example.com/demo2.mp4'],
    notes: [
      { title: 'Java Basics', link: 'https://www.example.com/notes/java-basics.pdf' },
      { title: 'Advanced Spring Boot', link: 'https://www.example.com/notes/advanced-spring-boot.pdf' }
    ]
  },
  {
    id: 5,
    name: 'Aaradhya Gupta',
    email: 'aaradhyagupta@example.com',
    classes: 'SQL, Database Management',
    reviews: 'Great tutor for SQL and database management.',
    contactInfo: 'Phone: 345-678-9012',
    education: 'Master of Computer Applications',
    rating: 4.6,
    image: 'https://media.gettyimages.com/id/1148232146/photo/teacher-with-school-children-at-classroom.jpg?s=612x612&w=gi&k=20&c=UILiUP3LoJ-5x-QJwU0TUfwnZ3mfLlawio7pBh_GIDk=',
    demoVideos: ['https://www.example.com/demo1.mp4', 'https://www.example.com/demo2.mp4'],
    notes: [
      { title: 'SQL Basics', link: 'https://www.example.com/notes/sql-basics.pdf' },
      { title: 'Advanced Database Management', link: 'https://www.example.com/notes/advanced-dbms.pdf' }
    ]
  },
  
];
const Tutor = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTutor, setSelectedTutor] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTutorClick = (tutor) => {
    setSelectedTutor(tutor);
  };

  const filteredTutors = tutors.filter((tutor) => {
    return (
      tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutor.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <>
        {'★'.repeat(fullStars)}
        {halfStar && '☆'}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className="tutor-container">
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div className="tutor-list">
        {filteredTutors.map((tutor) => (
          <div key={tutor.id} className="tutor-card" onClick={() => handleTutorClick(tutor)}>
            <p className="tutor-reviews">Reviews: {tutor.reviews}</p>
            <img src={tutor.image} alt={tutor.name} className="tutor-image" />
            <h2>{tutor.name}</h2>
            <p>{tutor.classes}</p>
            <p className="tutor-rating">{renderStars(tutor.rating)}</p>
          </div>
        ))}
      </div>
      {selectedTutor && (
        <div className="tutor-details">
          <h2>{selectedTutor.name}</h2>
          <img src={selectedTutor.image} alt={selectedTutor.name} className="tutor-details-image" />
          <p>Email: {selectedTutor.email}</p>
          <p>Classes: {selectedTutor.classes}</p>
          <p>Reviews: {selectedTutor.reviews}</p>
          <p>Rating: {renderStars(selectedTutor.rating)}</p>
          <p>Contact Info: {selectedTutor.contactInfo}</p>
          <p>Education: {selectedTutor.education}</p>
          <div className="tutor-videos">
            <h3>Demo Videos</h3>
            {selectedTutor.demoVideos.map((video, index) => (
              <video key={index} controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
          <div className="tutor-notes">
            <h3>Notes</h3>
            <ul>
              {selectedTutor.notes.map((note, index) => (
                <li key={index}>
                  <a href={note.link} target="_blank" rel="noopener noreferrer">
                    {note.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tutor;


