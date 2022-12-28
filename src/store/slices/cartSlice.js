import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify';

const cartSlice = createSlice({
    name : 'cart',
    initialState:[],
    reducers : {
        addCart(state, action) {
            if(!state.find(item => item.id === action.payload.id)){
                state.push(action.payload);
                toast('Item added to cart successfuly!', {
                    type: 'success',
                    position: 'top-right',
                    autoClose: 5000,
                  });
            } 
            else {
                toast('Item already added to cart!', {
                    type: 'warning',
                    position: 'top-right',
                    autoClose: 5000,
                  });
            }
            
        },
        removeCartItem(state, action) {
            state.pop(state.indexOf(action.payload))
        }
    }
});

export const cart = cartSlice.reducer;
export const  {addCart, removeCartItem} = cartSlice.actions;