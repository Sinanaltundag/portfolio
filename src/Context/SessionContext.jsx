import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import  { useContext, useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";
import { auth, googleProvider } from "../helpers/firebaseConnect";

const SessionContext = createContext();

export function useSession() {
  return useContext(SessionContext);
}

export function SessionProvider({ children }) {
  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(true);

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function createUser(email, password, displayName) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: "",
      });
      
    } catch (err) {
      alert(err.message);
    }
    // return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    signOut(auth);
  }

  function loginWithGoogle() {
    googleProvider.setCustomParameters({ prompt: "select_account" });
  signInWithPopup(auth, googleProvider)
    .then((result) => {})
    .catch((error) => {
      toast(`Incorrect password or invalid credentials: ${error.message}`);
    });
  }

  function resetPassword(email) {
    sendPasswordResetEmail(auth, email)
    .then(() => {
      toast("An email has been sent for reset your password!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast(errorCode + errorMessage);
    });
  }

  function updateEmail(email) {
    return userInfo.updateEmail(email);
  }

  function updatePassword(password) {
    return userInfo.updatePassword(password);
  }

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setUserInfo(user);
  //     setLoading(false);
  //   });

  //   return unsubscribe;
  // }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
     
        const userSum = user? {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          uid: user.uid,
        }:""
        setUserInfo(userSum)
        setLoading(false)
       
      
    });
    return  unsubscribe; //! clean-up function
  }, []);

  const value = {
    userInfo,
    createUser,
    login,
    logout,
    resetPassword,
    updatePassword,
    updateEmail,
    loginWithGoogle,
    setUserInfo,
  };

  return (
    <SessionContext.Provider value={value}>
      {!loading && children}
    </SessionContext.Provider>
  );
}





/* 
import React, { useContext,  useState } from "react";


const SessionContext = React.createContext();

const SessionProvider = ({ children }) => {
  //!sign in kontrolü

const [userInfo, setUserInfo] = useState([])


  return (
    <SessionContext.Provider
      value={{
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};



export const useSession = () => {
  return useContext(SessionContext);
};

export { SessionContext, SessionProvider }; */
