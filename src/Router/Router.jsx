import React, { forwardRef, useContext, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AdminPanel from "../pages/Admin/AdminPanel";
import SignIn from "../pages/Admin/SignIn";
import ClassNotes from "../pages/ClassNotes/ClassNotes";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../pages/Projects/Projects";
import Page404 from "../helpers/Page404";
import { AdminRouter } from "./PrivateRouter";
import SignUp from "../pages/Admin/SignUp";
import { Box, ThemeProvider } from "@mui/material";
import { useTheme } from "../Context/ThemeContext";
import { BlogProvider } from "../Context/DataContext";
import Details from "../pages/ClassNotes/ClassNotesComponents/Details";

const Router = () => {
  const { theme } = useTheme();

  //!  background için navbar yüksekliğine göre box yükseklik ayarlama
  const [navbarHeight, setNavbarHeight] = useState(0);
  const nav = React.useRef();
  React.useEffect(() => {
    setNavbarHeight(nav.current.clientHeight);
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <BlogProvider>
          <div ref={nav}>
            <Navbar />
          </div>
          <Box
            backgroundColor="background.paper"
            style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}
          >
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/Main" element={<Main />} />
              <Route path="/Projects" element={<Projects />} />
              {/*! signin sayfasına login yapan girmemeli */}
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/SignUp" element={<SignUp />} />

              <Route path="details" element={<Details />} />
              <Route path="/Class%20Notes" element={<ClassNotes />} />
              <Route path="/AdminPanel" element={<AdminRouter />}>
                <Route path="" element={<AdminPanel />} />
              </Route>
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Box>
        </BlogProvider>
      </ThemeProvider>
    </>
  );
};

export default Router;
