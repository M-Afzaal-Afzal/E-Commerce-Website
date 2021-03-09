import * as actionTypes from '../actionTypes/actionTypes'
import produce from "immer";

const INITIAL_STATE = {
    currentUser: null,
    errorMessage: null,
    isLoading: false,
}

const reducer = produce((draft, action) => {
    switch (action.type) {
        case actionTypes.SIGN_IN_SUCCESS:
            draft.currentUser = action.user;
            draft.errorMessage = null;
            draft.isLoading = false;
            break;
        case actionTypes.SIGN_IN_FAILURE:
        case actionTypes.SIGN_OUT_FAILURE:
            draft.errorMessage = action.errorMessage;
            draft.isLoading = false;
            break;
        case actionTypes.EMAIL_SIGN_IN_START:
        case actionTypes.GOOGLE_SIGN_IN_START:
        case actionTypes.SIGN_UP_START:
            draft.isLoading= true;
            break;
        case actionTypes.SIGN_OUT_SUCCESS:
            draft.currentUser = null;
            draft.errorMessage = null;
            break;

        default:
            break;
    }
}, INITIAL_STATE)

export default reducer;