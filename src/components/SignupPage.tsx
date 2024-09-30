import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css'; // Import your CSS for styling

interface SignupPageProps {
  setUsers: React.Dispatch<React.SetStateAction<{ email: string; password: string }[]>>;
}

const SignupPage: React.FC<SignupPageProps> = ({ setUsers }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (name && email && password) {
      // Register the user
      setUsers((prevUsers) => [...prevUsers, { email, password }]);
      alert('Signup successful! Please login.');
      navigate('/login'); // Redirect to login page after signup
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
      <img src="/images/college-logo.png" alt="College Logo" className="college-logo" />
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="signup-button">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
