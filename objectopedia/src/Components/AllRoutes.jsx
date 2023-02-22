import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PhoneSignUp from "./PhoneSignUp";
import Signup from "./Signup";
import ProtectedRoute from "./ProtectedRoute";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/" element={<PhoneSignUp />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
