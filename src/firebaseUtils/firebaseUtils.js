import firebase from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCEVk-SwQmqdfsrfbY0RPngKz0eehYYVVs",
    authDomain: "my-online-shop-51a7c.firebaseapp.com",
    projectId: "my-online-shop-51a7c",
    storageBucket: "my-online-shop-51a7c.appspot.com",
    messagingSenderId: "326190403850",
    appId: "1:326190403850:web:b3428bd6fcf40d725a2af3",
    measurementId: "G-QQDB2YXXL3"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}else {
    firebase.app(); // if already initialized, use that one
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    'prompt': 'select_account',
    'login_hint': 'user@example.com'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
