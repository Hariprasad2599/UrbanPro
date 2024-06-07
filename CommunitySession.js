import React, { useState } from 'react';

const CommunitySession = () => {
  // Define state for users
  const [users, setUsers] = useState([]);

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '0 20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    cell: {
      border: '2px solid #007BFF',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '20px',
      boxSizing: 'border-box',
    },
    sessionTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#007BFF',
    },
    sessionDescription: {
      fontSize: '18px',
      color: '#333',
      marginBottom: '10px',
    },
    sessionDetails: {
      fontSize: '16px',
      color: '#666',
      marginBottom: '10px',
    },
    joinButton: {
      padding: '10px 20px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#007BFF',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    '@media (max-width: 768px)': {
      table: {
        display: 'block',
      },
      cell: {
        width: '100%',
        marginBottom: '20px',
      },
    },
  };

  // Array of session data
  const sessions = [
    {
      title: 'Yoga Class',
      description: 'Join our relaxing yoga session to improve your flexibility and mental well-being.',
      date: 'June 15, 2024',
      time: '10:00 AM - 11:00 AM',
      location: 'Community Center Hall',
    },
    {
      title: 'Art Workshop',
      description: 'Explore your creativity with our art workshop. All materials provided.',
      date: 'June 20, 2024',
      time: '1:00 PM - 3:00 PM',
      location: 'Art Room 2',
    },
    {
      title: 'Cooking Class',
      description: 'Learn to cook delicious meals with our expert chefs.',
      date: 'June 25, 2024',
      time: '5:00 PM - 7:00 PM',
      location: 'Kitchen Studio',
    },
    {
      title: 'Music Jam',
      description: 'Come join us for a fun music jam session. All skill levels welcome!',
      date: 'June 30, 2024',
      time: '3:00 PM - 5:00 PM',
      location: 'Music Room',
    },
    // Add more sessions as needed
  ];

  const handleJoinClick = (sessionTitle) => {
    // Example function to handle join action
    alert(`You have joined the ${sessionTitle}`);
  };

  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <tbody>
          <tr>
            {sessions.slice(0, 2).map((session, index) => (
              <td key={index} style={styles.cell}>
                <div style={styles.sessionTitle}>{session.title}</div>
                <div style={styles.sessionDescription}>{session.description}</div>
                <div style={styles.sessionDetails}>Date: {session.date}</div>
                <div style={styles.sessionDetails}>Time: {session.time}</div>
                <div style={styles.sessionDetails}>Location: {session.location}</div>
                <button
                  style={styles.joinButton}
                  onClick={() => handleJoinClick(session.title)}
                >
                  Join Now
                </button>
              </td>
            ))}
          </tr>
          <tr>
            {sessions.slice(2, 4).map((session, index) => (
              <td key={index} style={styles.cell}>
                <div style={styles.sessionTitle}>{session.title}</div>
                <div style={styles.sessionDescription}>{session.description}</div>
                <div style={styles.sessionDetails}>Date: {session.date}</div>
                <div style={styles.sessionDetails}>Time: {session.time}</div>
                <div style={styles.sessionDetails}>Location: {session.location}</div>
                <button
                  style={styles.joinButton}
                  onClick={() => handleJoinClick(session.title)}
                >
                  Join Now
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CommunitySession;
