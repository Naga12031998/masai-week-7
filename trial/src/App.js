import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Carosul from './components/Carosul'
import Card1 from './components/Card1'
import Background from './components/Background'
import Card2 from './components/Card2'
import Follow from './components/Follow'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Carosul />
      <Card1 />
      <Background />
      <Card2 />
      <Follow />
      <Footer />
    </div>
  );
}

export default App;
