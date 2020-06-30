import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA0gNH5RQKkqb8mkQ1WSGvKUqg1CYi597Y",
  authDomain: "db-crown-clothing-ecom-react.firebaseapp.com",
  databaseURL: "https://db-crown-clothing-ecom-react.firebaseio.com",
  projectId: "db-crown-clothing-ecom-react",
  storageBucket: "db-crown-clothing-ecom-react.appspot.com",
  messagingSenderId: "821363287292",
  appId: "1:821363287292:web:f44f1d4501738b2722a379",
  measurementId: "G-YRDVDNBSX7",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
