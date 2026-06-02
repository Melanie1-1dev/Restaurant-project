import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './Components/Login/Login'
import LandingPage from './Components/LandingPage/LandingPage'
import CreateAccount from './Components/CreateAccount/CreateAccount'
import RestaurantOwner from './Components/RestaurantOwner/RestaurantOwner'
import RestaurantPage from './Components/RestaurantPage/RestaurantPage'
import Orders from './Components/Orders/Orders'
import Menububble from './Components/Menububble/Menububble'
import Dashbord from './Components/Dashbord/Dashbord'
import Order2 from './Components/Order2/Order2'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/landing" element={<LandingPage />} />

        <Route path="/create-account" element={<CreateAccount />} />

        <Route path="/restaurant-owner" element={<RestaurantOwner />} />
        <Route path="/restaurant-page" element={<RestaurantPage />} />   
       <Route path="/footer" element={<Footer />} />
       <Route path="/orders" element={<Orders />} />
       <Route path="/menububble" element={<Menububble />} />
       <Route path="/dashbord" element={<Dashbord />} />
       <Route path="/order2" element={<Order2 />} />  

      </Routes>

    </BrowserRouter>

  )
}

export default App