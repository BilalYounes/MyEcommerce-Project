
import './App.css';
import Cart from './Pages/Cart/Cart';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import ProsuctList from './Pages/ProductList';
import { Cartiteme } from './data';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
 
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    
    <BrowserRouter>
    <Navbar cartItems={cartItems}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/cart" element={<Cart onAdd={onAdd} onRemove={onRemove}  cartItems={cartItems} />} />
      <Route exact path="/ProductList" element={<ProsuctList onAdd={onAdd} />} />
      {/* <Route exact path="/Lo" element={<ProsuctList onAdd={onAdd} />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
