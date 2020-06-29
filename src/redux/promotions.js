import * as ActionTypes from './ActionTypes'

export const promos = (state = {
    isLoading: true,
    erMess: null,
    promos: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading: false, erMess: null, promos: action.payload};
        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading: true, erMess: null, promos: []}; 
        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading: false, erMess: action.payload, promos: []};
            
        default:
            return state    
    }
}