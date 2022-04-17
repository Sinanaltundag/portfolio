import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDSaESiXnuiOQPJhq1xc5jZI7RKCeQSWyA",
  authDomain: "portfolio-72905.firebaseapp.com",
  projectId: "portfolio-72905",
  storageBucket: "portfolio-72905.appspot.com",
  messagingSenderId: "798211307434",
  appId: "1:798211307434:web:d0b5853f654dc158085dd3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  } catch (error) {
    alert(error.code, error.message);
  }
};
