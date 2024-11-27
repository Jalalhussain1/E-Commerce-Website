
import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for createRoot
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import ShopContextProvider from './context/ShopContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>

  </BrowserRouter>
);

