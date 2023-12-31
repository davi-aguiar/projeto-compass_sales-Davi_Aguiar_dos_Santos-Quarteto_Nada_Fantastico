import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

export const firebaseConfig = {
  apiKey: 'AIzaSyCTwpz1cV-JrcbkUEi1HEABlNy1Eu9ivLc',
  authDomain: 'compasssales-10d2f.firebaseapp.com',
  projectId: 'compasssales-10d2f',
  storageBucket: 'compasssales-10d2f.appspot.com',
  messagingSenderId: '673674320213',
  appId: '1:673674320213:web:3fb2cc0c2d55b36da937dc',
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
