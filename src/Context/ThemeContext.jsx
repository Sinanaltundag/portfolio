import { createTheme, useMediaQuery } from "@mui/material";
import { createContext, useContext, useState } from "react";

const MyThemeContext = createContext();

const MyThemeProvider = ({ children }) => {
  //   /* Color Theme Swatches in Hex */
  // .UI/UX-1-hex { color: #D9B26A; }
  // .UI/UX-2-hex { color: #BF9663; }
  // .UI/UX-3-hex { color: #F2F2F2; }
  // .UI/UX-4-hex { color: #A6A6A6; }
  // .UI/UX-5-hex { color: #0D0D0D; }

  // /* Color Theme Swatches in RGBA */
  // .UI/UX-1-rgba { color: rgba(216, 178, 106, 1); }
  // .UI/UX-2-rgba { color: rgba(191, 149, 99, 1); }
  // .UI/UX-3-rgba { color: rgba(242, 242, 242, 1); }
  // .UI/UX-4-rgba { color: rgba(165, 165, 165, 1); }
  // .UI/UX-5-rgba { color: rgba(12, 12, 12, 1); }

  // /* Color Theme Swatches in HSLA */
  // .UI/UX-1-hsla { color: hsla(39, 59, 63, 1); }
  // .UI/UX-2-hsla { color: hsla(33, 41, 57, 1); }
  // .UI/UX-3-hsla { color: hsla(0, 0, 95, 1); }
  // .UI/UX-4-hsla { color: hsla(0, 0, 65, 1); }
  // .UI/UX-5-hsla { color: hsla(0, 0, 5, 1); }

  //! theme değiştirme
  const [activeTheme, setActiveTheme] = useState(true);

  const theme = createTheme({
    palette: {
      mode: activeTheme ? "light" : "dark",
      background: {
        main: "#F2F2F2",
      },
      ...(activeTheme === false && {
        background:{
          main: "#0D0D0D",
        }
      }),
      primary: {
        main: "#BF9663",
        light: "#D9B26A"
      }
    },
  });

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
