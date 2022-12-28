import { createSlice } from "@reduxjs/toolkit";

const productNow = createSlice({
    name : 'product',
    initialState:[],
    reducers : {
        addProduct(state, action) {
            state[0] = action.payload;
        }
    }
});

export const product = productNow.reducer;
export const  {addProduct} = productNow.actions;