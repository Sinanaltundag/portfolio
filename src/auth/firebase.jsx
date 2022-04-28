import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   apiKey: "AIzaSyDSaESiXnuiOQPJhq1xc5jZI7RKCeQSWyA",
//   authDomain: "portfolio-72905.firebaseapp.com",
//   projectId: "portfolio-72905",
//   storageBucket: "portfolio-72905.appspot.com",
//   messagingSenderId: "798211307434",
//   appId: "1:798211307434:web:d0b5853f654dc158085dd3",
// };






const app = initializeApp({
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
});
// const firebaseConfig = {
//   apiKey: "AIzaSyCWYfsLW0kzJ1DhwIwcRtHbdWP5p5sTdj0",
//   authDomain: "blog-e9a3e.firebaseapp.com",
//   databaseURL: "https://blog-e9a3e-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "blog-e9a3e",
//   storageBucket: "blog-e9a3e.appspot.com",
//   messagingSenderId: "325804284763",
//   appId: "1:325804284763:web:04e1d47740ac1e728cd87e"
// };

// const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
  
};

export const logout = () => {
  signOut(auth);
  toast("Logout successful");
};

export const loginWithGoogle = () => {
  googleProvider.setCustomParameters({ prompt: "select_account" });
  signInWithPopup(auth, googleProvider)
    .then((result) => {})
    .catch((error) => {
      toast(`Incorrect password or invalid credentials: ${error.message}`);
    });
};
export const updateUserProfile =(displayName,photoURL)=>{
  updateProfile(auth.currentUser, {
    displayName: displayName, 
    photoURL: photoURL
  
  }).catch((error) => {
    toast(error)
  });
}

export const userObserver = () => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      // currentUser verisi bir obje. içindekiler kullanılabilir
      return currentUser?.email;
      // aktif kullanıcının emailini döndürdüm
    } else {
      // User is signed out
      return "";
    }
  });
};

export const resetPassword = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      toast("An email has been sent for reset your password!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast(errorCode + errorMessage);
    });
};
