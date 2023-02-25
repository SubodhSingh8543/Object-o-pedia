// import './App.css';
import { useState } from 'react';

import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

// import "./App.css";
import AdminNavbar from './Admin/Components/adminNavbar';
import AllRoutes from './Components/AllRoutes';

import Nav from './Components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { loginAdminSideFunction } from './Redux/auth/auth.action';
import Footer from './Components/Footer';


function App() {

  const [athenticated,setAuth] = useState(JSON.parse(localStorage.getItem("adminAuth")));


  return (
    <div className="App">


      {athenticated === true ? <AdminNavbar/> :(<><Nav/><AllRoutes/> <Footer/> </> )};

    </div>
  );
}

export default App;
