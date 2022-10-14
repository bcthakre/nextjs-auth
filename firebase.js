// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
import { getApp, getApps, initializeApp } from 'firebase/app';
//const initializeApp = require('firebase/app');
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD3m9rPKzc-MSfsSpJ6ZNqioVnVuyxm54U',
  authDomain: 'next-firebase-auth-16642.firebaseapp.com',
  projectId: 'next-firebase-auth-16642',
  storageBucket: 'next-firebase-auth-16642.appspot.com',
  messagingSenderId: '701051570350',
  appId: '1:701051570350:web:a8b9b8fef9deceb56fc53f',
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

export { app, db, storage };
