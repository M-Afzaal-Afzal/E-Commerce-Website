import * as actionTypes from '../actionTypes/actionTypes';
import {convertCollectionSnapshotToMap, firestore} from "../../firebaseUtils/firebaseUtils";

export const addOneItem = (category, id) => {
    return {
        type: actionTypes.ADD_ONE_ITEM,
        category: category,
        id: id,
    }
}

export const removeOneItem = (category, id) => {
    return {
        type: actionTypes.REMOVE_ONE_ITEM,
        category: category,
        id: id,
    }
}

export const fetchCollectionStart = () => {
    return {
        type: actionTypes.FETCH_COLLECTION_START,
    }
}

export const fetchCollectionSuccess = (collections) => {
    return {
        type: actionTypes.FETCH_COLLECTION_SUCCESS,
        collections: collections
    }
}

export const fetchCollectionFailure = (errorMessage) => {
    return {
        type: actionTypes.FETCH_COLLECTION_SUCCESS,
        errorMessage: errorMessage
    }
}

export const fetchCollections = () => {
    return dispatch => {

        dispatch(fetchCollectionStart());

        const collectionRef = firestore.collection('collections');

        collectionRef.get().then((snapshot) => {

            const collectionMap = convertCollectionSnapshotToMap(snapshot);
            dispatch(fetchCollectionSuccess(collectionMap));

        }).catch(err => {
            dispatch(fetchCollectionFailure(err.message))
        })


    }
}