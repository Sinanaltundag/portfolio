import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useContext, useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, googleProvider } from "../helpers/firebaseConnect";

const SessionContext = createContext();

export function useSession() {
  return useContext(SessionContext);
}

export function SessionProvider({ children }) {
  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function createUser(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      //! get user name , photo when create user (not working) study
      /*   await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: "",
      }); */
    } catch (err) {
      alert(err.message);
    }
  }
  function updateUserProfile(displayName, photoURL) {
    try {
      updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL,
      })
      toast(
        "Your profile been Updated' "
      );
    } catch (error) {
      toast(
        error.message
      );
    }
  }

  function logout() {
    signOut(auth);
  }

  function loginWithGoogle() {
    googleProvider.setCustomParameters({ prompt: "select_account" });
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        toast(`Welcome ${result.user.displayName}`)
        navigate("/")
      })
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
//! eklenecek
  function updateEmail(email) {
    return userInfo.updateEmail(email);
  }


//! user auth control
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      const userSum = user
        ? {
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            uid: user.uid,
          }
        : "";
      setUserInfo(userSum);
      setLoading(false);
    });
    return unsubscribe; //! clean-up function
  }, []);

  const value = {
    userInfo,
    createUser,
    login,
    logout,
    resetPassword,
    updateEmail,
    loginWithGoogle,
    setUserInfo,
    updateUserProfile,
  };

  return (
    <SessionContext.Provider value={value}>
      {!loading && children}
    </SessionContext.Provider>
  );
}

