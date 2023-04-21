import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Products from './Products';
import ProductItem from './ProductItem';
import Cart from './Cart';

import NavbarComponent from './NavbarComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleAuth from './GoogleAuth';
import { GoogleOAuthProvider } from '@react-oauth/google';



function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <div className='header'>
        <Route path='/' exact component={Products} />
        <Route path='/product/:id' exact component={ProductItem} />
        <Route path='/cart' exact component={Cart} />
        
      </div>
      <ToastContainer />
    </BrowserRouter>
    
  );
}

export default App;
