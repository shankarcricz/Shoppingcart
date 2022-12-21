import axios from "axios";


const URL =  'https://fakestoreapi.com/products';

export const fetchProducts = () => async (dispatch, getState) => {
    const response = await axios.get(URL);
    dispatch({
        type : 'FETCH_PRODS',
        payload : response.data 
    })
}