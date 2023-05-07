import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Forget from "./components/Forget";
import Navbar from "./components/Navbar";
import Verify from "./components/Verify";
import ResetPassword from "./components/ResetPassword";
import Profile from "./components/Profile";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
import Predction from "./components/Predction";

const App = () => {
  return (
    <>
    <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="signup" element={<Signup />} />

        <Route path="login" element={<Login />} />

        <Route path="forget" element={<Forget />} />

        <Route path="verify" element={<Verify />} />

        <Route path="resetpassword" element={<ResetPassword/>}/>
        
        <Route path="profile" element={<Profile/>}/>
        <Route path="contact" element={<Contactus/>}/>
        <Route path="prediction" element={<Predction/>}/>
      </Routes>
   <Footer/>
    </>
  );
};

export default App;
