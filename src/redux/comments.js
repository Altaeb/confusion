import * as ActionTypes from './ActionTypes'

export const comments = (state = {
    isLoading: true,
    erMess: null,
    comments: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, erMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, erMess: action.payload, comments: []};
            
        default:
            return state    
    }
}