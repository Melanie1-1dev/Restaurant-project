import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Background from './Components/Background/Background';
import CreateAccount from './Components/CreateAccount/CreateAccount';

const App = () => {
  return (
    <div>
      <Navbar />
      <Background />  
<div className="container">
      <LandingPage />
</div>
      <CreateAccount />

    </div>
  )
}

export default App
