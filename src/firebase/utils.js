import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const {
  PREACT_APP_FIREBASE_API_KEY,
  PREACT_APP_FIREBASE_AUTH_DOMAIN,
  PREACT_APP_FIREBASE_DATABASE_URL,
  PREACT_APP_FIREBASE_PROJECT_ID,
  PREACT_APP_FIREBASE_STORAGE_BUCKET,
  PREACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  PREACT_APP_FIREBASE_APP_ID,
  PREACT_APP_FIREBASE_MEASUREMENT_ID,
} = process.env;

const config = {
  apiKey: PREACT_APP_FIREBASE_API_KEY,
  authDomain: PREACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: PREACT_APP_FIREBASE_DATABASE_URL,
  projectId: PREACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: PREACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: PREACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: PREACT_APP_FIREBASE_APP_ID,
  measurementId: PREACT_APP_FIREBASE_MEASUREMENT_ID,
};

const isBrowser = typeof window !== "undefined";

if (isBrowser) firebase.initializeApp(config);
export const auth = isBrowser && firebase.auth();
export const firestore = isBrowser && firebase.firestore();
export const googleProvider =
  isBrowser && new firebase.auth.GoogleAuthProvider();
if (isBrowser) googleProvider.setCustomParameters({ prompt: "select_account" });

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

export const addCollectionAndDocuments = async (
  collectionKey,
  documentsToAdd,
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  documentsToAdd.forEach((currentDocument) => {
    const currentDocumentRef = collectionRef.doc();
    batch.set(currentDocumentRef, currentDocument);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotsToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
