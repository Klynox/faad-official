import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyDbVQ5CaQtOew_mtGFEheirEykrYpIznxQ",
  authDomain: "faad-e5a22.firebaseapp.com",
  projectId: "faad-e5a22",
  storageBucket: "faad-e5a22.appspot.com",
  messagingSenderId: "400527809703",
  appId: "1:400527809703:web:fa43c48016bf0108ad0f82",
  measurementId: "G-NL20N3P4JD"
};

if (!firebase.apps.length) firebase.initializeApp(config)

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.firestore()
export default firebase;
