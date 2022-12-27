import {configureStore} from '@reduxjs/toolkit';
import { product } from './slices/productNow';
import { products } from './slices/productSlices';
import { addProduct } from './slices/productNow';
import { addProducts } from './slices/productSlices';

const store = configureStore({
    reducer : {
        products : products,
        product : product
    }
});

export {store, addProduct, addProducts}



