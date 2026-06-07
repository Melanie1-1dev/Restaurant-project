import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Auth & Landing Routes
import Login from './Components/Login/Login';
import LandingPage from './Components/LandingPage/LandingPage';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import RestaurantForm from './Components/RestaurantForm/RestaurantForm';
import RestaurantWizard from './Components/RestaurantWizard/RestaurantWizard';
import RestaurantOverview from './Components/RestaurantOverview/RestaurantOverview';
import MissMoreSignIn from './Components/MissMoreSignIn/MissMoreSignIn';
import CreateAnCount from './Components/CreateAnCount/CreateAnCount';
// Management & Workspace Panels
import RestaurantOwner from './Components/RestaurantOwner/RestaurantOwner';
import Orders from './Components/Orders/Orders';
import Menububble from './Components/Menububble/Menububble';
import Order2 from './Components/Order2/Order2';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';

// Core Application Pages (Double-check case-sensitivity on "Pages" vs "pages")
import Dashbord from './Components/Pages/Dashbord/Dashbord';
import NewOrder from './Components/Pages/NewOrder/NewOrder';
import AnOtherOrder from './Components/Pages/AnOther-order/AnOther-order';
import MenuItems from './Components/Pages/MenuItems/MenuItems';
import ProfileDashboard from './Components/ProfileDashboard/ProfileDashboard';


// Fix: Commented or imported chart support if you decide to keep a dedicated route page
// import SalesChart from './SalesChart'; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Core Entry Point Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/restaurant-form" element={<RestaurantForm />} />
        <Route path="/restaurant-wizard" element={<RestaurantWizard />} />
        <Route path="/restaurant-overview" element={<RestaurantOverview />} />



        {/* Dashboard Panels */}
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/new-order" element={<NewOrder />} />
        <Route path="/an-other-order" element={<AnOtherOrder />} />
        <Route path="/menu-items" element={<MenuItems />} />
        <Route path="/profile-dashboard" element={<ProfileDashboard />} />
        <Route path="/missmore-signin" element={<MissMoreSignIn />} />
        <Route path="/CreateAnCount" element={<CreateAnCount />} />

        {/* Operational Modules */}
        <Route path="/restaurant-owner" element={<RestaurantOwner />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/menububble" element={<Menububble />} />
        <Route path="/order2" element={<Order2 />} />  
        <Route path="/home" element={<HomePage />} />
        <Route path="/footer" element={<Footer />} />
        
        {/* Optional standalone chart viewer route */}
        {/* <Route path="/chart" element={<SalesChart />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;