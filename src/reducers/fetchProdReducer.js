


export const fetchProdReducer = (state=[], action) => {
    switch(action.type){
        case 'FETCH_PRODS':
            return [ action.payload];
        default:
            return state;
    }
}