/* eslint-disable no-undef */
import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyB4u1lJ5EZ_khIVvmDEzJUo7Rivai_pM3U",
  authDomain: "auth-next-dev.firebaseapp.com",
  projectId: "auth-next-dev",
  storageBucket: "auth-next-dev.appspot.com",
  messagingSenderId: "156943916267",
  appId: "1:156943916267:web:56d521facabdc3ee49b2ae",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const auth = firebaseApp.auth();
export default firebaseApp;
