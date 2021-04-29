import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "e-commerce-group-app.firebaseapp.com",
    projectId: "e-commerce-group-app",
    storageBucket: "e-commerce-group-app.appspot.com",
    messagingSenderId: "513250536364",
    appId: "1:513250536364:web:2649b9050aedb70591a809"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
