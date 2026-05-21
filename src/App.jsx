import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Background from './Components/Background/Background';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import RestaurantOwner from './Components/RestaurantOwner/RestaurantOwner';

const App = () => {
  return (
    <div>
       <Navbar />
       <Background />
      <LandingPage />
      <CreateAccount />
      <RestaurantOwner />
      
    </div>
  )
}

export default App
