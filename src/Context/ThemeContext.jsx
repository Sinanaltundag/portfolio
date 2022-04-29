import { createTheme } from "@mui/material";
import { createContext, useContext, useState } from "react";

const MyThemeContext = createContext();

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

export function useTheme() {
  return useContext(MyThemeContext);
};

export { MyThemeContext,MyThemeProvider };
