import { createSlice } from "@reduxjs/toolkit";

const productSlices = createSlice({
    name : 'products',
    initialState:[],
    reducers : {
        addProducts(state, action) {
            state.push(action.payload);
        }
    }
});

export const products = productSlices.reducer;
export const  {addProducts} = productSlices.actions;