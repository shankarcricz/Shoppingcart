import { combineReducers } from "redux";
import { fetchProdReducer } from "./fetchProdReducer";


const reducers = combineReducers({
    Products : fetchProdReducer
})

export default reducers;