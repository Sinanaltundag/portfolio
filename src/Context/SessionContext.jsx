import React, { useContext, useEffect, useState } from "react";


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [signIn, setSignIn] = useState(false);
const [user, setUser] = useState([])
  const [taskData, setTaskData] = useState([]);

  const getLocalStorage = () => {
    localStorage.getItem("data") &&
      setTaskData(JSON.parse(localStorage.getItem("data")));
  };
  const setLocalStorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
  };
  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    setLocalStorage(taskData);
  }, [taskData]);

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
