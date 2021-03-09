import * as actionTypes from '../actionTypes/actionTypes';

export const setCurrentUser = (user) => {
    return {
        type: actionTypes.SET_CURRENT_USER,
        user: user,
    }
}

export const googleSignInStart = () => {
    return {
        type: actionTypes.GOOGLE_SIGN_IN_START,
    }
}

export const signInSuccess = (user) => {
    return {
        type: actionTypes.SIGN_IN_SUCCESS,
        user: user,
    }
}

export const signInFailure = (errorMessage) => {
    return {
        type: actionTypes.SIGN_IN_FAILURE,
        errorMessage: errorMessage,
    }
}

export const emailSignInStart = (email, password) => {
    return {
        type: actionTypes.EMAIL_SIGN_IN_START,
        email: email,
        password: password,
    }
}

export const userSignOutStart = () => {
    return {
        type: actionTypes.SIGN_OUT_START,
    }
}

export const userSignOutFailure = (errorMessage) => {
    return {
        type: actionTypes.SIGN_OUT_FAILURE,
        errorMessage: errorMessage,
    }
}

export const userSignOutSuccess = () => {
    return {
        type: actionTypes.SIGN_OUT_SUCCESS,
    }
}

export const userSignUpStart = (userData) => {
    return {
        type: actionTypes.SIGN_UP_START,
        payload: userData,
    }
}

// export const emailSignInSuccess = (user) => {
//     return {
//         type: actionTypes.EMAIL_SIGN_IN_SUCCESS,
//         user: user,
//     }
// }
//
// export const emailSignInFailure = (errorMessage) => {
//     return {
//         type: actionTypes.EMAIL_SIGN_IN_FAILURE,
//         errorMessage: errorMessage,
//     }
// }