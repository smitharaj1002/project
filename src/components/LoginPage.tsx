import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

// Define the prop types for LoginPage
interface LoginPageProps {
  setIsAuthenticated: (auth: boolean) => void;
  users: { email: string; password: string }[];  // Accept users array as prop
}

const LoginPage: React.FC<LoginPageProps> = ({ setIsAuthenticated, users }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the user exists in the signed-up users
    const userExists = users.some(user => user.email === email && user.password === password);

    if (userExists) {
      setIsAuthenticated(true);
      navigate('/home'); // Redirect to home page after successful login
    } else {
      alert('Invalid credentials. Please sign up if you are a new user.');
    }
  };

  return (
    <div className="login-page">
      <div className="background-image"></div>
      <div className="login-container">
        <img src="/images/college-logo.png" alt="College Logo" className="college-logo" />
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
          <button type="submit" className="login-button">Login</button>
        </form>
        <p>Don't have an account? <button onClick={() => navigate('/signup')} className="signup-link">Sign up</button></p>
      </div>
    </div>
  );
};

export default LoginPage;
