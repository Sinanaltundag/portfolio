import  { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/database";
import { getDatabase } from "firebase/database";

const app = initializeApp({
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
  });

  export const auth = getAuth(app);
  export const firebaseDB = getDatabase();
export const googleProvider = new GoogleAuthProvider();

export default app;