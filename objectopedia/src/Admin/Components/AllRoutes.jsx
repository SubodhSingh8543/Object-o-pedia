import { useState } from "react";
import { Routes , Route } from "react-router-dom";
import AdminDashboard from "../Pages/AdminDashboard";
import Home from "../Pages/home";
// import AdminDashboard from "../Pages/AdminDashboard";
import AdminNavbar from "./adminNavbar";

const AllRoutes = () => {

    return(
        <Routes>
          <Route path="/" element={<Home/>} /> 
          
        </Routes>
    )
}

export default AllRoutes;