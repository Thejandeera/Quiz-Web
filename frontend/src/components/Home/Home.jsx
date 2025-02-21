import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../Navbar/NavigationBar';

const Home = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(sessionStorage.getItem('token') || "");

  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <NavigationBar/>
      <h1>Welcome to the Quiz App</h1>
    </div>
  );
};

export default Home;
