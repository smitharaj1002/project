import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for internal navigation
import './HomePage.css'; 

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <nav className="navbar">
        <img src="/images/college-logo.png" alt="College Logo" className="navbar-logo" />
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>  
          <li><Link to="/faculty">Faculty Details</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/placements">Placements</Link></li>
        </ul>
      </nav>

      <header className="hero-section">
        <h1>Welcome to MCA Department</h1>
        <p>Explore our courses, faculty, and placement opportunities.</p>
      </header>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} MCA Department. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
