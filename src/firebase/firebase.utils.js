import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBFKO5W1vpk2IupJBz2AcHpTsu3uBXw-YA',
  authDomain: 'reactdevelopercourse.firebaseapp.com',
  databaseURL: 'https://reactdevelopercourse.firebaseio.com',
  projectId: 'reactdevelopercourse',
  storageBucket: 'reactdevelopercourse.appspot.com',
  messagingSenderId: '36307625344',
  appId: '1:36307625344:web:5f484fcd34db2a88a28d65',
  measurementId: 'G-LL7J8ZMEDJ'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.warn('Error creating user: ', error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
