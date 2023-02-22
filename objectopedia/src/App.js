import './App.css';
import ProductPage from './Pages/ProductPage';
import AdminNavbar from './Admin/Components/adminNavbar';
import AllRoutes from './Components/AllRoutes';
import { useState } from 'react';
function App() {
  const [athenticated,setAuth] = useState(true);

  return (
    <div className="App">
 
       {athenticated?  <AdminNavbar/> : <AllRoutes/>}

    </div>
  );
}

export default App;
