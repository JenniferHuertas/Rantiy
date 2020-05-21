import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA7PYeBGmW_GjKgLpH6wmMuxnscaDD4Y4w',
  authDomain: 'rantiy-23750.firebaseapp.com',
  databaseURL: 'https://rantiy-23750.firebaseio.com',
  projectId: 'rantiy-23750',
  storageBucket: 'rantiy-23750.appspot.com',
  messagingSenderId: '803918455222',
  appId: '1:803918455222:web:aa41b3e43a4e3d9c6ea117',
  measurementId: 'G-R138EF21RZ',
};
  // Initialize Firebase
const db = firebase.initializeApp(firebaseConfig).firestore();

export default db;
