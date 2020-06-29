import * as ActionTypes from './ActionTypes'

export const dishes = (state = {
    isLoading: true,
    erMess: null,
    dishes: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, erMess: null, dishes: action.payload};
        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, erMess: null, dishes: []}; 
        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, erMess: action.payload, dishes: []};
            
        default:
            return state    
    }
}