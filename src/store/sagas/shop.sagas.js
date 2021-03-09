import {takeLatest, call, put, all} from 'redux-saga/effects';

import * as actionTypes from '../actionTypes/actionTypes';
import {convertCollectionSnapshotToMap, firestore} from "../../firebaseUtils/firebaseUtils";
import {fetchCollectionFailure, fetchCollectionSuccess} from "../actions/shop.actions";

export function* fetchCollections() {

    try {
        const collectionRef = yield firestore.collection('collections');

        const snapshot = yield collectionRef.get();

        const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);

        yield put(fetchCollectionSuccess(collectionMap));

    } catch (error) {
        yield put(fetchCollectionFailure(error.message));
    }


}

function* fetchCollectionsStart() {
    yield takeLatest(actionTypes.FETCH_COLLECTION_START, fetchCollections);
}

export function * shopSagas () {
    yield all([
        call(fetchCollectionsStart)
    ])
}