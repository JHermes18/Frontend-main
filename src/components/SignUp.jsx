import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { IoLockClosedOutline, IoMailOutline, IoPersonCircleOutline } from 'react-icons/io5';

function SignUp() {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    closeModal();
  };

  const handleReset = (e) => {
    e.preventDefault();
    console.log('Password reset requested for email:', email);
  };

  const handleCompanySignup = (e) => {
    e.preventDefault();
    // Handle company registration here
  };

  const handleJobSeekerSignup = (e) => {
    e.preventDefault();
    // Handle job seeker registration here
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle job seeker registration here
  };

  return (
    <div>
      <button onClick={openModal}>Login</button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div style={{ display: 'flex' }}>
              <span className="close-button" onClick={closeModal} size={30}>
                &times;
              </span>
            </div>
            <h2>Login to continue</h2>
            <form onSubmit={handleLogin}>
              <label htmlFor="username">Username:</label>
              <div className="login-input-form">
                <IoPersonCircleOutline size={25} className="login-icon" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  placeholder="johndoe@123"
                  className="login-input"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <label htmlFor="password">Password:</label>
              <div className="login-input-form">
                <IoLockClosedOutline size={25} className="login-icon" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password must be at least 6 characters"
                  className="login-input"
                  required
                />
              </div>
              <Link to="/reset-password" className="forgot-password">
                Forgot Password?
              </Link>
              <input type="submit" value="Login" />
            </form>
          </div>

          {/* Password Reset Form */}
          <div className="modal">
            <h2>Reset Password</h2>
            <form onSubmit={handleReset}>
              <label htmlFor="email">Email:</label>
              <div className="forgot-input-form">
                <IoMailOutline size={25} className="forgot-icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  className="forgot-input"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <input type="submit" value="Reset Password" />
            </form>
          </div>

          {/* Signup Company Form */}
          <div className="modal">
            <h3>Create your employer account right now</h3>
            <form onSubmit={handleCompanySignup}>
              <label htmlFor="companyName">Company Name:</label>
              <div className="signup-input-form">
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={companyName}
                  className="signup-input"
                  placeholder="WebWorkWave Inc."
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
              </div>
              <label htmlFor="companyEmail">Email:</label>
              <div className="signup-input-form">
                <input
                  type="email"
                  id="companyEmail"
                  name="companyEmail"
                  value={email}
                  className="signup-input"
                  placeholder="johndoe123@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <label htmlFor="companyContact">Contact Number:</label>
              <div className="signup-input-form">
                <input
                  type="tel"
                  id="companyContact"
                  name="companyContact"
                  value={contactNumber}
                  className="signup-input"
                  placeholder="09123456789"
                  onChange={(e) => setContactNumber(e.target.value)}
                  required
                />
              </div>
              <label htmlFor="companyPassword">Password:</label>
              <div className="signup-input-form">
                <input
                  type="password"
                  id="companyPassword"
                  name="companyPassword"
                  value={password}
                  className="signup-input"
                  placeholder="Password must be at least 6 characters"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <label htmlFor="companyConfirmPassword">Confirm Password:</label>
              <div className="signup-input-form">
                <input
                  type="password"
                  id="companyConfirmPassword"
                  name="companyConfirmPassword"
                  value={confirmPassword}
                  className="signup-input"
                  placeholder="Password must match"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>
          </div>

          {/* Signup Job Seeker Form */}
          <div className="modal">
            <h3>Be WebWorkWave's Candidate</h3>
            <form onSubmit={handleJobSeekerSignup}>
              <div className="signup-name-header-form">
                <div>
                  <label htmlFor="firstName">First Name:</label>
                  <div className="signup-input-form">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={firstName}
                      className="signup-input"
                      placeholder="John"
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName">Last Name:</label>
                  <div className="signup-input-form">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={lastName}
                      className="signup-input"
                      placeholder="Doe"
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <label htmlFor="jobSeekerEmail">Email:</label>
              <div className="signup-input-form">
                <input
                  type="email"
                  id="jobSeekerEmail"
                  name="jobSeekerEmail"
                  value={email}
                  className="signup-input"
                  placeholder="johndoe123@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <label htmlFor="contactNumber">Contact Number:</label>
              <div className="signup-input-form">
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={contactNumber}
                  className="signup-input"
                  placeholder="09123456789"
                  onChange={(e) => setContactNumber(e.target.value)}
                  required
                />
              </div>
              <label htmlFor="jobSeekerPassword">Password:</label>
              <div className="signup-input-form">
                <input
                  type="password"
                  id="jobSeekerPassword"
                  name="jobSeekerPassword"
                  value={password}
                  className="signup-input"
                  placeholder="Password must be at least 6 characters"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <label htmlFor="jobSeekerConfirmPassword">Confirm Password:</label>
              <div className="signup-input-form">
                <input
                  type="password"
                  id="jobSeekerConfirmPassword"
                  name="jobSeekerConfirmPassword"
                  value={confirmPassword}
                  className="signup-input"
                  placeholder="Password must match"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>
          </div>

          {/* Signup Option */}
          <div className="modal">
            <h1>We are so glad that you are here!</h1>
            <p>First of all, what do you want to do?</p>
            <div className="signup-container">
              <div className="signup-option">
                <h2>I am looking for work</h2>
                <p>Create a WebWorkWave Account</p>
                <Link to="/signup/job-seeker">
                  <button className="user-type-button">Start looking for Jobs</button>
                </Link>
              </div>

              <p className="or-text">OR</p>

              <div className="signup-option">
                <h2>I am looking to hire</h2>
                <p>Create an Organization Account</p>
                <Link to="/signup/company">
                  <button className="user-type-button">Start looking for a candidate</button>
                </Link>
              </div>
            </div>
            <div>
              Already have an account?
              <Link to="/" className="signin">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;