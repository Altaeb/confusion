import * as ActionTypes from './ActionTypes'

export const leaders = (state = {
    isLoading: true,
    erMess: null,
    leaders: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_LEADERS:
            return {...state, isLoading: false, erMess: null, leaders: action.payload};
        case ActionTypes.LEADERS_LOADING:
            return {...state, isLoading: true, erMess: null, leaders: []}; 
        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading: false, erMess: action.payload, leaders: []};
            
        default:
            return state    
    }
}