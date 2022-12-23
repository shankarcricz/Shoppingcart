export const fetchProd = (state=[], action) => {
    switch(action.type){
        case 'FETCH_PROD':
            return [ action.payload];
        default:
            return state;
    }
}