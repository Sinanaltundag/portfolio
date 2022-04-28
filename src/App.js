// import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
// import { ThemeConProvider, useThemeContext } from "./Context/ThemeContext";
import Router from "./Router/Router";
import { ToastContainer } from "react-toastify";
import { useContext, useEffect } from "react";
import { auth } from "./auth/firebase";
import { MyThemeProvider, SessionContext } from "./Context/SessionContext";
import 'react-toastify/dist/ReactToastify.css';




// const darkTheme = createTheme({
//   palette: {
//     mode: 'light',
//   },
// });

function App() {
// const {theme}=useGlobalContext()
const {setUserInfo} = useContext(SessionContext)
useEffect(() => {
    const userInfo = auth.onAuthStateChanged((user) => {
     
      if (!user) {
        setUserInfo("")
        return;
      }
      const userSum = {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid,
      };
      setUserInfo(userSum)
    });
    return userInfo; //! clean-up function
  }, [setUserInfo]);


  return (
    <div className="App">
    
    <MyThemeProvider>
      <Router />
      </MyThemeProvider>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={2}
      />
    </div>
  );
}

export default App;
