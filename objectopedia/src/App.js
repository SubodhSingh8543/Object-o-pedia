// import './App.css';
import { useState } from 'react';

import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

// import "./App.css";
import AdminNavbar from './Admin/Components/adminNavbar';
import AllRoutes from './Components/AllRoutes';

import Nav from './Components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { loginAdminSideFunction } from './Redux/auth/auth.action';


function App() {

  const [athenticated,setAuth] = useState(JSON.parse(localStorage.getItem("adminAuth")));


  return (
    <div className="App">


      {athenticated === true ? <AdminNavbar/> :(<><Nav/><AllRoutes/></> )};

    </div>
  );
}

export default App;
