import {configureStore} from '@reduxjs/toolkit';
import { ProductList } from './slices/productSlices';
import { addProduct } from './slices/productNow';
import { addProducts } from './slices/productSlices';
import { cart, addCart, removeCartItem } from './slices/cartSlice';
import { productsApi } from './apis';
import { setTab } from './slices/productSlices';
import { setupListeners } from '@reduxjs/toolkit/dist/query';


const store = configureStore({
    reducer : {
        cart: cart,
        [productsApi.reducerPath] : productsApi.reducer,
        ProductList: ProductList
    },
    middleware : (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(productsApi.middleware);
    }
});
setupListeners(store.dispatch);

export {useFetchProductsQuery, useFetchProductQuery, useFetchElectronicsQuery, useFetchJewelQuery, useFetchMensQuery, useFetchWomensQuery} from './apis/index'
export {store, addProduct, addProducts, addCart, removeCartItem, setTab}



