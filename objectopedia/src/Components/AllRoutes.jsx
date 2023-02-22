import { useState } from "react";
import { Routes , Route } from "react-router-dom";
// import Home from "../Pages/home";
import HomePage from "../Pages/HomePage";

const AllRoutes = () => {

    return(
        <Routes>
          <Route path="/" element={<HomePage/>} /> 
        </Routes>
    )
}

export default AllRoutes;