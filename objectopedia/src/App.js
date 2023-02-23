// import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
// import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import PhoneSignUp from "./Components/PhoneSignUp";
import ProtectedRoute from "./Components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

import AdminNavbar from './Admin/Components/adminNavbar';
import AllRoutes from './Components/AllRoutes';
import Cart from './Pages/Cart';
import ProductPage from './Pages/ProductPage';

function App() {
  const [athenticated,setAuth] = useState(false);

  return (
    <div className="App">
      {/* {athenticated? <AdminNavbar/> : <AllRoutes/>} */}

      {/* <AllRoutes/> */}
      <ProductPage/>
      {/* <Cart/> */}
      {/* <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/phonesignup" element={<PhoneSignUp />} />
            </Routes>
          </UserAuthContextProvider> */}
    </div>
  );
}

export default App;
