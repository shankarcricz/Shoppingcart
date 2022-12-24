


export const fetchProdReducer = (state={product:[]}, action) => {
    switch(action.type){
        case 'FETCH_PRODS':
            return {...state, product : action.payload};
        default:
            return state;
    }
}