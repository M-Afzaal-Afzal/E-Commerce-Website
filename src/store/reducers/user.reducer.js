import * as actionTypes from '../actionTypes/actionTypes'
import produce from "immer";

const INITIAL_STATE = {
    currentUser: null,
}

const reducer = produce((draft, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_USER:
            draft.currentUser = action.user;
            break;
        default:
            break;
    }
}, INITIAL_STATE)

export default reducer;