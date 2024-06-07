import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Profile from './pages/Profile';
import Classes from './pages/Classes';
import Account from './pages/Account';
import Settings from './pages/Settings';
import Support from './pages/Support';
import Tutor from './pages/Tutor';
import Activities from './pages/Activities';
import CommunitySession from './pages/CommunitySession';
import Gym from './pages/Gym';
import Chatbot from './pages/Chatbot';
import Feedback from './pages/Feedback';
import AuthNavigationBar from './components/AuthNavigationBar';
import NavigationBar from './components/NavigationBar';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Billing from './pages/Billing';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/register"
            element={
              <>
                <AuthNavigationBar />
                <div className="main-content">
                  <Register setUsers={setUsers} currentUser={currentUser} />
                </div>
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <AuthNavigationBar />
                <div className="main-content">
                  <Login users={users} setCurrentUser={setCurrentUser} />
                </div>
              </>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <>
                <AuthNavigationBar />
                <div className="main-content">
                  <ForgotPassword />
                </div>
              </>
            }
          />
          <Route
            path="/billing"
            element={
              currentUser ? (
                <>
                  <NavigationBar />
                  <Sidebar currentUser={currentUser} setCurrentUser={setCurrentUser} />
                  <div className="main-content">
                    <Billing currentUser={currentUser} />
                  </div>
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="*"
            element={
              <>
                <NavigationBar />
                <Sidebar currentUser={currentUser} setCurrentUser={setCurrentUser} />
                <div className="main-content">
                  <Routes>
                    <Route path="/" element={<Navigate to="/register" />} /> {/* Redirect root to register */}
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/classes" element={<Classes />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/tutor" element={<Tutor />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/community-session" element={<CommunitySession />} />
                    <Route path="/gym" element={<Gym />} />
                    <Route path="/chatbot" element={<Chatbot />} /> {/* Add a route for Chatbot */}

                    <Route path="/feedback" element={<Feedback />} />
                  </Routes>
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;







