// import './App.css';
import { useState } from 'react';
import AdminNavbar from './Admin/Components/adminNavbar';
import AllRoutes from './Components/AllRoutes';
import Cart from './Pages/Cart';
import ProductPage from './Pages/ProductPage';

function App() {
  const [athenticated,setAuth] = useState(false);

  return (
    <div className="App">
      {athenticated? <AdminNavbar/> : <AllRoutes/>}

      {/* <AllRoutes/> */}
      {/* <ProductPage/> */}
      {/* <Cart/> */}
    </div>
  );
}

export default App;
