import {takeLatest, put, all, call} from 'redux-saga/effects';
import * as actionTypes from '../actionTypes/actionTypes';
import {googleProvider, auth, createUserProfileDocument} from "../../firebaseUtils/firebaseUtils";
import {
    signInSuccess,
    signInFailure, userSignOutSuccess, userSignOutFailure,
} from "../actions/user.actions";

function* getSnapshotFromUserAuth(user) {
    try {
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    } catch (error) {
        signInFailure(error.message)
    }
}

function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);

    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

function* onGoogleSignInStart() {
    yield takeLatest(actionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* signInWithEmail({email, password}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);

    } catch (error) {
        yield put(signInFailure(error.message))
    }
}

function* onEmailSignInStart() {
    yield takeLatest(actionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* signOut() {
    try {
        yield auth.signOut();
        yield put(userSignOutSuccess());
    } catch (error) {
        yield put(userSignOutFailure());
    }
}

function* onSignOutStart() {
    yield takeLatest(actionTypes.SIGN_OUT_START, signOut);
}

function* signUp({payload: {name, email, password}}) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth({...user, displayName: name})

    } catch (error) {
        yield put(signInFailure(error.message));
    }

}

function* onSignUpStart() {
    yield takeLatest(actionTypes.SIGN_UP_START, signUp)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignOutStart),
        call(onSignUpStart),
    ]);
}
