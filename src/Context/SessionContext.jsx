import { createTheme } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";


const SessionContext = React.createContext();

const SessionProvider = ({ children }) => {
  //!sign in kontrolü
  const [signIn, setSignIn] = useState(false);
const [user, setUser] = useState([])
const [userInfo, setUserInfo] = useState([])
// sayfa yenilendiğinde sessionstorage kontrolü
// useEffect(() => {
// const userLoggedIn = sessionStorage.getItem('user');
// userLoggedIn? setSignIn(true): setSignIn(false);

// console.log(userLoggedIn);
// setUser(JSON.parse(userLoggedIn))
// console.log(JSON.parse(userLoggedIn))
// }, [])
// //! theme değiştirme
// const [activeTheme, setActiveTheme] = useState(true)
      
// const theme = createTheme({
//   palette: {
//     mode: activeTheme?'light':'dark',
//   },
// });

  return (
    <SessionContext.Provider
      value={{
        signIn,
        setSignIn,
        user, 
        setUser,
        // theme,
        // setActiveTheme,
        // activeTheme,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

const MyThemeContext = React.createContext();

const MyThemeProvider = ({ children }) => {
 
//! theme değiştirme
const [activeTheme, setActiveTheme] = useState(true)
      
const theme = createTheme({
  palette: {
    mode: activeTheme?'light':'dark',
  },
});

  return (
    <MyThemeContext.Provider
      value={{
        
        theme,
        setActiveTheme,
        activeTheme,
       
      }}
    >
      {children}
    </MyThemeContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(SessionContext);
};

export { SessionContext, SessionProvider,MyThemeContext,MyThemeProvider };
