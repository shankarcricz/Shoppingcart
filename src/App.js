import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import products from './Products';
import ProductItem from './ProductItem';
import Navbar from './Navbar';
import Contact from './Contact';
import Checkout from './Checkout';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container-fluid'>
        <Route path='/' exact component={Home} />
        <Route path='/products' exact component={products} />
        <Route path='/productitem' exact component={ProductItem} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/check-out' exact component={Checkout} />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
