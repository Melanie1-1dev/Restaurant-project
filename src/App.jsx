import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Background from './Components/Background/Background';

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
<Background />      
    </div>
  )
}

export default App
