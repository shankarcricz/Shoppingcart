import axios from "axios";


const URL =  'https://fakestoreapi.com/products';

export const fetchProducts = () => async (dispatch, getState) => {
    const response = await axios.get(URL);
    
    dispatch({
        type : 'FETCH_PRODS',
        payload : response.data 
    })
}

export const fetchProd = (id) => async (dispatch) => {
    const response = await axios.get(URL + `/`+id);
    dispatch({
        type : 'FETCH_PROD',
        payload : response.data
    })
}


export const removeProd = () => (dispatch) => {
    dispatch({
        type:'REMOVE_PROD',
    })
}

export const addCart = (form) => (dispatch) => {
    dispatch({
        type:'ADD_TO_CART',
        payload:form

    })
}

export const getCart = () => (dispatch) => {
    dispatch({
        type : 'GET_CART'
    })
}

export const removeItem = (id) => (dispatch) => {
    dispatch({
        type: 'REMOVE',
        payload: id
    })
}

