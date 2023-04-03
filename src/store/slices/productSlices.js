import { createSlice } from "@reduxjs/toolkit";

const productSlices = createSlice({
    name : 'products',
    initialState:['All'],
    reducers : {
        addProducts(state, action) {
            state.push(action.payload)
            // state.push(action.payload);
        },
        setTab(state,action) {
            state.pop()
            state.push(action.payload)
        }
    }
});

export const ProductList = productSlices.reducer;
export const  {addProducts, setTab} = productSlices.actions;