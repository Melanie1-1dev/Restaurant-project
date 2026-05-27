import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Background from './Components/Background/Background'
import LandingPage from './Components/LandingPage/LandingPage'
import CreateAccount from './Components/CreateAccount/CreateAccount'
import RestaurantOwner from './Components/RestaurantOwner/RestaurantOwner'
import RestaurantPage from './Components/RestaurantPage/RestaurantPage'

const App = () => {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Background />} />

        <Route path="/landing" element={<LandingPage />} />

        <Route path="/create-account" element={<CreateAccount />} />

        <Route path="/restaurant-owner" element={<RestaurantOwner />} />
        <Route path="/restaurant-page" element={<RestaurantPage />} />   

      </Routes>

    </BrowserRouter>

  )
}

export default App