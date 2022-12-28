import {configureStore} from '@reduxjs/toolkit';
import { product } from './slices/productNow';
import { products } from './slices/productSlices';
import { addProduct } from './slices/productNow';
import { addProducts } from './slices/productSlices';
import { cart, addCart, removeCartItem } from './slices/cartSlice';

const store = configureStore({
    reducer : {
        products : products,
        product : product,
        cart: cart
    }
});

export {store, addProduct, addProducts, addCart, removeCartItem}



