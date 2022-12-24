import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';




const store = createStore(reducers, applyMiddleware(thunk));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
    <App />
    </Provider>
    
  
);


