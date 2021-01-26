import * as actionTypes from '../actionTypes/actionTypes'

const INITIAL_STATE = {
    currentUser : null,
}

const reducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_USER:
            return {
                currentUser: action.user,
            }
        default:
            return state;
    }
}

export default reducer;