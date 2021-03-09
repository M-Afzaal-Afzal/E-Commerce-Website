import {all,call,takeLatest,put} from 'redux-saga/effects';
import * as actionTypes from '../actionTypes/actionTypes';
import { clearCart } from '../actions/index.actions';

function * clearCartOnSignOut() {
    yield put(clearCart())
}

function * onSignOutSuccess() {
    yield takeLatest(actionTypes.SIGN_OUT_SUCCESS,clearCartOnSignOut);
}

export function * cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ])
}

