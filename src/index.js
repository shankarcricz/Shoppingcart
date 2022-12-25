import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
// import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { PersistGate } from 'redux-persist/integration/react';

// const persistConfig = {
//     key : 'persist-key',
//     storage
// }

// const persistedReducer = persistReducer(persistConfig,reducers);
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
// const persistor = persistStore(store)

//using redux-persist to avoid state loss after page refresh -> nice
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
            <App />
    </Provider>
);


