import firebase from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCEVk-SwQmqdfsrfbY0RPngKz0eehYYVVs",
    authDomain: "my-online-shop-51a7c.firebaseapp.com",
    databaseURL: "https://my-online-shop-51a7c-default-rtdb.firebaseio.com",
    projectId: "my-online-shop-51a7c",
    storageBucket: "my-online-shop-51a7c.appspot.com",
    messagingSenderId: "326190403850",
    appId: "1:326190403850:web:b3428bd6fcf40d725a2af3",
    measurementId: "G-QQDB2YXXL3"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config);
} else {
    firebase.app(); // if already initialized, use that one
}

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {

    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();

    objectsToAdd.forEach((obj) => {
        const newDocRef = collectionRef.doc();
        console.log(collectionRef);
        batch.set(newDocRef, obj);
    })

    return await batch.commit();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    // console.log('snapshot',snapShot);
    // console.log('DataSnapshot', snapShot.data())

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (err) {
            console.log(error.message);
            console.log('error creating user')
        }
    }

    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
