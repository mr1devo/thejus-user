// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import bgimg from './loginimg.jpg';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:4005/signup/login`, {
        username: username,
        password: password,
      });

      if (response.data.success) {
        // Store the token in localStorage
        localStorage.setItem('token', response.data.token);

        // Redirect or perform any necessary actions after successful login
        alert('Login successful');
        console.log(response.data);
        navigate('/Home'); // Redirect to the dashboard or any other page
      } else {
        setError('Invalid Username or Password. Please try again.');
        console.log(response.data);
      }
    } catch (err) {
      setError('Error occurred during login. Please try again.');
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgimg})`,
        
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // 100% of the viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container component="main" maxWidth="xs" className='contain'>
        {/* <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: ' rgba(255, 255, 255, 0.7)'}}> */}
          <h1 typeof='bold'>LOGIN</h1>
          <form onSubmit={handleLogin} style={{ width: '100%', marginTop: 0 }}>
            <TextField
              label="Username"
              variant="outlined"
              margin="normal"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin} type="submit" variant="contained" color="primary" style={{ marginTop: 2 }}>
              Login
            </Button>
            {error && <p style={{ marginTop: 9, color: 'red' }}>{error}</p>}
          <div>
              <label className="sub-text" style={{ marginTop: 5}}>
                Do not have an account?  
                <a href="Signup" className="non-styled-link hover-link login-link">
                  Signup
                </a>
              </label>
              </div>
          </form>
        {/* </Paper> */}
      </Container>
    </div>
  );
};

export default Login;