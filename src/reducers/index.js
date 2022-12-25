import { combineReducers } from "redux";

import _, { mapKeys } from "lodash";




const fetchProd = (state={}, action) => {
    switch(action.type){
        case 'FETCH_PROD':
            return {...state, [action.payload.id]: action.payload };
        case 'REMOVE_PROD':
            return {}
        default:
            return state;
    }
}
const fetchProdReducer = (state={}, action) => {
    switch(action.type){
        case 'FETCH_PRODS':
            return {...state, ..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
}
const addCartReducer = (state={}, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return {...state, [action.payload.id]: action.payload};
        case 'GET_CART': 
            return state
        case 'REMOVE':
            return _.omit(state, action.payload)
        default:
            return state;
    }  
}

const reducers = combineReducers({
    Products : fetchProdReducer,
    Product : fetchProd,
    Cart: addCartReducer
})

export default reducers;