import './App.css';
import { useState } from 'react';
import AdminNavbar from './Admin/Components/adminNavbar';
import AllRoutes from './Components/AllRoutes';


function App() {
  const [athenticated,setAuth] = useState(true);

  return (
    <div className="App">
       {athenticated?  <AdminNavbar/> : <AllRoutes/>}
    </div>
  );
}

export default App;
