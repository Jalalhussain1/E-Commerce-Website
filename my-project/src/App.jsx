import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'

import './App.css';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Order from './pages/Order';
import Navbar from './components/Navbar';

function App() {
  return (
  <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/collection' element={<Collection/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/product' element={<Product/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/PlaceOrder' element={<PlaceOrder/>} />
      <Route path='/Order' element={<Order/>} />
    </Routes>
  </div>
  );
}

export default App;

