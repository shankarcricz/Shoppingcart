import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Products from './Products';
import ProductItem from './ProductItem';








function App() {
  return (
    <BrowserRouter>
   
      <div className='container-fluid'>
        <Route path='/' exact component={Products} />
        <Route path='/product/:id' exact component={ProductItem} />
      </div>
    </BrowserRouter>
  );
}

export default App;
