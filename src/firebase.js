import firebase from 'firebase/app'
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCVipUCzbZWc_yCAJxym_pO8tULjDPia7E",
    authDomain: "chatapp-a1669.firebaseapp.com",
    projectId: "chatapp-a1669",
    storageBucket: "chatapp-a1669.appspot.com",
    messagingSenderId: "640236644348",
    appId: "1:640236644348:web:3c82000ce1d4ed27a23479"
  });

  export const firebaseApp =  auth.auth()