import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBf4sLDxhBSeEM0YfZfdnSAotRHlCkjvL8',
  authDomain: 'robocode-evt.firebaseapp.com',
  projectId: 'robocode-evt',
  storageBucket: 'robocode-evt.appspot.com',
  messagingSenderId: '778695771583',
  appId: '1:778695771583:web:1354991abb6bcec7eb0d0a',
  measurementId: 'G-S6K4EFX215',
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const serverTimeStamp = firebase.firestore.FieldValue.serverTimestamp;

const RecaptchaVerifier = firebase.auth.RecaptchaVerifier;

export { firestore, serverTimeStamp, RecaptchaVerifier };
