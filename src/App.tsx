import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import FacultyDetails from './components/FacultyDetails';
import Gallery from './components/Gallery';
import Placement from './components/Placement';
import SignupPage from './components/SignupPage';
import { useState } from 'react';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Track if user is logged in
  const [users, setUsers] = useState<{ email: string; password: string }[]>([]);  // Store signed-up users

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Redirect to login if not authenticated */}
          <Route path="/" element={<Navigate to="/login" />} />
          
          {/* Login page */}
          <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} users={users} />} />

          {/* Signup page */}
          <Route path="/signup" element={<SignupPage setUsers={setUsers} />} />

          {/* If user is authenticated, allow access to the home page and other routes */}
          {isAuthenticated ? (
            <>
              <Route path="/home" element={<HomePage />} />
              <Route path="/faculty" element={<FacultyDetails />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/placements" element={<Placement />} />
            </>
          ) : (
            // If not authenticated, redirect to login
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
