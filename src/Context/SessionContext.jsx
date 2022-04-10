import React, { useContext, useEffect, useState } from "react";


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [signIn, setSignIn] = useState(false);
const [user, setUser] = useState([])
// sayfa yenilendiğinde sessionstorage kontrolü
useEffect(() => {
const userLoggedIn = sessionStorage.getItem('user');
userLoggedIn? setSignIn(true): setSignIn(false);

console.log(userLoggedIn);
setUser(JSON.parse(userLoggedIn))
console.log(JSON.parse(userLoggedIn))
}, [])


  return (
    <AppContext.Provider
      value={{
        signIn,
        setSignIn,
        user, 
        setUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
