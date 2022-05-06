import { createTheme, useMediaQuery } from "@mui/material";
import { createContext, useContext, useState } from "react";

const MyThemeContext = createContext();

const MyThemeProvider = ({ children }) => {

  //! theme change
  const [activeTheme, setActiveTheme] = useState(true);

  const theme = createTheme({
    palette: {
      mode: activeTheme ? "light" : "dark",
      background: {
        main: "#F2F2F2",
      },
      ...(activeTheme === false && {
        background: {
          main: "#0D0D0D",
        },
      }),
      primary: {
        main: "#BF9663",
        light: "#D9B26A",
      },
    },
  });

  //! create custom breakpoints
  const width1200 = useMediaQuery("(max-width:1200px)");
  const width1000 = useMediaQuery("(max-width:1000px)");
  const width800 = useMediaQuery("(max-width:800px)");
  const width600 = useMediaQuery("(max-width:600px)");

  const [navbarHeight, setNavbarHeight] = useState(0);

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
        navbarHeight,
        setNavbarHeight,
      }}
    >
      {children}
    </MyThemeContext.Provider>
  );
};

export function useCustomTheme() {
  return useContext(MyThemeContext);
}

export { MyThemeContext, MyThemeProvider };
