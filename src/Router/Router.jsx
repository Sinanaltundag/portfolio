import React, { useContext } from "react";
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
import { ThemeProvider } from "@mui/material";
import { useTheme } from "../Context/ThemeContext";
import { BlogProvider } from "../Context/DataContext";

const Router = () => {

  const {theme}= useTheme()
 
  return (
    <>
    <ThemeProvider theme={theme}>
    <BlogProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Projects" element={<Projects />} />
{/*! signin sayfasına login yapan girmemeli */}
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />

        <Route path="/Class%20Notes" element={<ClassNotes />} />
        <Route path="/AdminPanel" element={<AdminRouter />}>
          <Route path="" element={<AdminPanel />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      </BlogProvider>
      </ThemeProvider>
    </>
  );
};

export default Router;
