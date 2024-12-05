import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import PlaceOrder from './Pages/PlaceOrder'
import Order  from './Pages/Order'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  

  return (
    <>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path='/'element= {<Home />} />
          <Route path='/collection'element= {<Collection  />} />
          <Route path='/about' element= {<About />} />
          <Route path='/contact' element= {<Contact />} />
          <Route path='/product/:ProductId' element= {<Product />} />
          <Route path='/Cart' element= {<Cart />} />
          <Route path='/Login' element= {<Login />} />
          <Route path='/PlaceOrder' element= {<PlaceOrder />} />
          <Route path='/Order' element= {<Order />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
