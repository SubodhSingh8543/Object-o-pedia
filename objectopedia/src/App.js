// import './App.css';
import { useState } from 'react';
// import "./App.css";
import AdminNavbar from './Admin/Components/adminNavbar';
import AllRoutes from './Components/AllRoutes';

import Nav from './Components/Navbar';


function App() {
  const [athenticated,setAuth] = useState(false);

  return (
    <div className="App">


      {athenticated? <AdminNavbar/> :(<><Nav/><AllRoutes/></> )}

    </div>
  );
}

export default App;
