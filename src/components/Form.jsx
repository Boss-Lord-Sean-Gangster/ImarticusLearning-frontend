// EnrollForm.js
import React, { useState } from 'react';
import '../styles/Form.css';
import { useNavigate } from 'react-router-dom';

const Form = ({ closeForm, courseId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate(`/checkout/${courseId}`);
    console.log(courseId);
    const userData = { name, email, password };

    // Replace the URL with your actual backend endpoint for creating a user
    try {
      const response = await fetch('https://imarticus-assignment-backend-916eb5811153.herokuapp.com/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert('You have successfully enrolled!');
        closeForm();
      } else {
        alert('Error enrolling user');
      }
    } catch (error) {
      console.error('Error enrolling user:', error);
    }
  };

  return (
    <div className="enroll-form-overlay">
      <div className="enroll-form">
        <button className="close-btn" onClick={closeForm}>×</button>
        <h2>Enroll Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className='submit-btn'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
