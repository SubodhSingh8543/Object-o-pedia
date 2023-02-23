import './App.css';
import { useState } from 'react';
import {  } from "module";
import AdminNavbar from './Admin/Components/adminNavbar';
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer';

function App() {
  const [athenticated,setAuth] = useState(true);

  return (
    <div className="App">
      {athenticated? <AdminNavbar/> : <AllRoutes/>}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
