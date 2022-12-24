

export const fetchProd = (state={}, action) => {
    switch(action.type){
        case 'FETCH_PROD':
            return {...state, ...action.payload};
        case 'REMOVE_PROD':
            return {}
        default:
            return state;
    }
}