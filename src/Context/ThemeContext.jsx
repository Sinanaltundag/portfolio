import { createTheme, useMediaQuery } from "@mui/material";
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

const width1200 = useMediaQuery('(max-width:1200px)');
const width1000 = useMediaQuery('(max-width:1000px)');
const width800 = useMediaQuery('(max-width:800px)');
const width600 = useMediaQuery('(max-width:600px)');


  return (
    <MyThemeContext.Provider
      value={{
        
        theme,
        setActiveTheme,
        activeTheme,
        width1200,
        width1000,
        width800,
        width600,
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
