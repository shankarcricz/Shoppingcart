import { combineReducers } from "redux";
import { fetchProd } from "./fetchProd";
import { fetchProdReducer } from "./fetchProdReducer";



const reducers = combineReducers({
    Products : fetchProdReducer,
    Product : fetchProd,
})

export default reducers;